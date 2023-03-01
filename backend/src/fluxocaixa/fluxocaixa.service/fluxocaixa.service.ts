import moment from "moment";
import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";
import {
  FluxoCaixaRepository,
  IFluxocaixaRepository,
} from "../fluxocaixa.repository/fluxocaixa.repository";

class FluxoCaixaServices {
  constructor(private fluxoCaixaRepository: IFluxocaixaRepository) {}

  async buscarPorId(id: string) {
    return await this.fluxoCaixaRepository.findById(id);
  }
  async buscarUltimoRegistro() {
    return await this.fluxoCaixaRepository.findLastItem();
  }

  async listarTodos() {
    return await this.fluxoCaixaRepository.findAll();
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    return await this.fluxoCaixaRepository.findAllByPage(
      numeroPagina,
      quantidadeItemPagina
    );
  }
  async listarTodosPorPaginaUsuario(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId:string
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
    usuariosId:string
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

    const ultimoItemAdicionado = await this.fluxoCaixaRepository.findLastItem();

    const saldoFinal =
      Number(ultimoItemAdicionado?.saldo) + Number(valorExtraido);
    const data = {
      data: dataAgora,
      hora: horaAgora,
      saldo: saldoFinal,
      ...dados,
    };

    const fluxocaixa = await this.fluxoCaixaRepository.save(data);

    return fluxocaixa;
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

    await this.atualizarSaldoFinal(id);
    return this.fluxoCaixaRepository.delete(id);
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
