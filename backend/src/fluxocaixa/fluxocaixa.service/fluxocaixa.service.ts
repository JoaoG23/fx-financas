import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";
import {
  FluxoCaixaRepository,
  IFluxocaixaRepository,
} from "../fluxocaixa.repository/fluxocaixa.repository";

import { buscaDatahoraAtual } from "../../utils/datetime/buscarDatahoraAtual/buscaDatahoraAtual";
import { CriteriosPesquisa } from "../interfaces/CriteriosPesquisa";
import { IFluxoCaixaService } from "./fluxocaixa.interface.service";

export class FluxoCaixaServices implements IFluxoCaixaService {
  private fluxoCaixaRepository: IFluxocaixaRepository;

  constructor(fluxoCaixaRepository: IFluxocaixaRepository) {
    this.fluxoCaixaRepository = fluxoCaixaRepository;
  }

  async buscarPorId(id: string) {
    return await this.fluxoCaixaRepository.findById(id);
  }

  async listarTodosPorUsuariosId(usuariosId: string) {
    return await this.fluxoCaixaRepository.findAllByUsuariosId(usuariosId);
  }

  async listarTodosPorPaginaUsuario(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    return await this.fluxoCaixaRepository.findAllByPageAndUsuariosId(
      numeroPagina,
      quantidadeItemPagina,
      usuariosId
    );
  }

  async listarTodosPorPaginaUsuarioMes(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    return await this.fluxoCaixaRepository.findAllByPageAndUsuariosIdAndThisMonth(
      numeroPagina,
      quantidadeItemPagina,
      usuariosId
    );
  }

  async pesquisarPorCriterios(criterios: CriteriosPesquisa) {
    return await this.fluxoCaixaRepository.findAllByCriterios(criterios);
  }

  async criar(dados: FluxocaixaDto) {
    const valorExtraido = dados?.valor;

    const dataAgora = buscaDatahoraAtual();

    const ultimoItemAdicionado =
      await this.fluxoCaixaRepository.findLastItemByUsuariosId(
        dados.usuariosId
      );

    const saldoFinal =
      Number(ultimoItemAdicionado?.saldo) + Number(valorExtraido);
    const data = {
      // data_insersao: dataAgora,
      saldo: saldoFinal,
      ...dados,
    };

    const fluxocaixa = await this.fluxoCaixaRepository.save(data);
    return fluxocaixa;
  }

  async criarVarios(itemsFluxocaixa: FluxocaixaDto[]) {
    for (const item of itemsFluxocaixa) {
      const valorExtraido = item?.valor;

      const dataAgora = buscaDatahoraAtual();

      const saldoFinal =
        (await this.calcularSaldoAtual(item?.usuariosId)) +
        Number(valorExtraido);

      const itemSalvo = {
        // data_insersao: dataAgora,
        saldo: saldoFinal,
        ...item,
      };

      await this.fluxoCaixaRepository.save(itemSalvo);
    }

    return `${itemsFluxocaixa?.length} itens foram cadastrados com sucesso`;
  }

  async atualizarUmPorId(id: string, dadosNovos: FluxocaixaDto) {
    const existeIdfluxocaixa: FluxocaixaDto =
      await this.fluxoCaixaRepository.findById(id);
    if (!existeIdfluxocaixa) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const fluxocaixa = await this.fluxoCaixaRepository.update(id, dadosNovos);
    await this.atualizarSaldoFinal(existeIdfluxocaixa.usuariosId);
    return fluxocaixa;
  }

  async atualizarDataInsersaoPorId(
    id: string,
    data_insersao: Pick<FluxocaixaDto, "data_insersao">
  ) {
    const existeIdfluxocaixa: FluxocaixaDto =
      await this.fluxoCaixaRepository.findById(id);
    if (!existeIdfluxocaixa) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const somenteDataInsersaoAtualizada = {
      ...data_insersao,
    };

    const fluxocaixa = await this.fluxoCaixaRepository.update(
      id,
      somenteDataInsersaoAtualizada as FluxocaixaDto
    );
    return fluxocaixa;
  }

  async deletarUmPorId(id: string) {
    const existeIdfluxocaixa = await this.fluxoCaixaRepository.findById(id);
    if (!existeIdfluxocaixa) {
      throw new Error("Não há esse Id para ser excluido");
    }

    const deletado = await this.fluxoCaixaRepository.delete(id);
    await this.atualizarSaldoFinal(existeIdfluxocaixa.usuariosId);
    return deletado;
  }

  async calcularSaldoAtual(usuariosId: string): Promise<number> {
    const lucroRetornoDb = await this.fluxoCaixaRepository.sumBiggerThanZero(
      usuariosId
    );
    const gastoRetornoDb = await this.fluxoCaixaRepository.sumLessThanZero(
      usuariosId
    );

    const {
      _sum: { valor: lucrosSomaTotal },
    } = lucroRetornoDb;
    const {
      _sum: { valor: gastosSomaTotal },
    } = gastoRetornoDb;

    return Number(lucrosSomaTotal) + Number(gastosSomaTotal);
  }

  async atualizarSaldoFinal(usuariosId: string) {
    const saldoAtual = await this.calcularSaldoAtual(usuariosId);

    const saldoAtualizado = await this.fluxoCaixaRepository.updateLastItemSaldo(
      saldoAtual,
      usuariosId
    );

    return saldoAtualizado;
  }
}

export default new FluxoCaixaServices(new FluxoCaixaRepository());
