import moment from "moment";
import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";
import {
  FluxoCaixaRepository,
  IFluxocaixaRepository,
} from "../fluxocaixa.repository/fluxocaixa.repository";

export class FluxoCaixaServices {
  private fluxoCaixaRepository: IFluxocaixaRepository;

  constructor(fluxoCaixaRepository) {
    this.fluxoCaixaRepository = fluxoCaixaRepository;
  }

  async buscarPorId(id: string) {
    return await this.fluxoCaixaRepository.findById(id);
  }

  async listarTodosPorUsuariosId(usuariosId) {
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

  async criar(dados: FluxocaixaDto) {
    const valorExtraido = dados?.valor;

    const dataAgora = moment().utc(true).format();
    const horaAgora = moment().utc(true).format();

    const ultimoItemAdicionado =
      await this.fluxoCaixaRepository.findLastItemByUsuariosId(
        dados.usuariosId
      );

    const saldoFinal =
      Number(ultimoItemAdicionado?.saldo) + Number(valorExtraido);
    const data = {
      data_insersao: dataAgora,
      hora_insersao: horaAgora,
      saldo: saldoFinal,
      ...dados,
    };

    const fluxocaixa = await this.fluxoCaixaRepository.save(data);

    return fluxocaixa;
  }

  

  async criarVarios(itemsFluxocaixa: FluxocaixaDto[]) {
    for (const item of itemsFluxocaixa) {
      const valorExtraido = item?.valor;

      const dataAgora = moment().utc(true).format();
      const horaAgora = moment().utc(true).format();

      const ultimoItemAdicionado =
        await this.fluxoCaixaRepository.findLastItemByUsuariosId(
          item.usuariosId
        );

      const saldoFinal =
        Number(ultimoItemAdicionado?.saldo) + Number(valorExtraido);

      const itemSalvo = {
        data_insersao: dataAgora,
        hora_insersao: horaAgora,
        saldo: saldoFinal,
        ...item,
      };

      await this.fluxoCaixaRepository.save(itemSalvo);
    }

    return `${itemsFluxocaixa?.length} itens foram cadastrados com sucesso`
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

  async deletarUmPorId(id: any) {
    const existeIdfluxocaixa = await this.fluxoCaixaRepository.findById(id);
    if (!existeIdfluxocaixa) {
      throw new Error("Não há esse Id para ser excluido");
    }

    const deletado = await this.fluxoCaixaRepository.delete(id);
    await this.atualizarSaldoFinal(id);
    return deletado;
  }

  async atualizarSaldoFinal(usuariosId: string) {
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

    const somaSaldo = Number(lucrosSomaTotal) + Number(gastosSomaTotal);
    const saldoAtualizado = await this.fluxoCaixaRepository.updateLastItemSaldo(
      somaSaldo,
      usuariosId
    );

    return saldoAtualizado;
  }
}

export default new FluxoCaixaServices(new FluxoCaixaRepository());
