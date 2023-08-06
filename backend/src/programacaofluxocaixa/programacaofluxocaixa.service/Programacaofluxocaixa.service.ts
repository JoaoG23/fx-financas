import {
  ProgramacaoFluxocaixaCriadoDto,
  ProgramacaoFluxocaixaVisualizarDto,
} from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";
import { ProgramacaoFluxocaixaRepository } from "../programacaofluxocaixa.repository/Programacaofluxocaixa.repository";
import { IProgramacaoFluxocaixaRepository } from "../programacaofluxocaixa.repository/Programacaofluxocaixa.repository.Interface";

export class ProgramacaoFluxocaixaServices {
  constructor(
    private programacaofluxocaixaRepository: IProgramacaoFluxocaixaRepository
  ) {}

  async buscarPorId(id: string) {
    return await this.programacaofluxocaixaRepository.buscarPorId(id);
  }

  async pesquisarPorCriterio(
    criterios: Omit<ProgramacaoFluxocaixaVisualizarDto, "ativo">
  ) {
    return await this.programacaofluxocaixaRepository.pesquisarPorCriterios(
      criterios
    );
  }

  async listarTodos() {
    return await this.programacaofluxocaixaRepository.buscarTodos();
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    return await this.programacaofluxocaixaRepository.buscarTodosPorPagina(
      numeroPagina,
      quantidadeItemPagina
    );
  }

  async criar(dados: ProgramacaoFluxocaixaCriadoDto) {
    const programacaofluxocaixa =
      await this.programacaofluxocaixaRepository.salvar(dados);
    return programacaofluxocaixa;
  }

  async atualizarUmPorId(
    id: string,
    dadosNovos: ProgramacaoFluxocaixaCriadoDto
  ) {
    const existeIdprogramacaofluxocaixa: any =
      await this.programacaofluxocaixaRepository.buscarPorId(id);
    if (!existeIdprogramacaofluxocaixa) {
      throw new Error("Não existe esse ID para ser atualizado");
    }
    const programacaofluxocaixa =
      await this.programacaofluxocaixaRepository.atualizarPorId(id, dadosNovos);
    return programacaofluxocaixa;
  }

  async deletarUmPorId(id: any) {
    const existeIdprogramacaofluxocaixa =
      await this.programacaofluxocaixaRepository.buscarPorId(id);
    if (!existeIdprogramacaofluxocaixa) {
      throw new Error("Não há esse Id para ser excluido");
    }

    return this.programacaofluxocaixaRepository.deletarPorId(id);
  }
}

export default new ProgramacaoFluxocaixaServices(
  new ProgramacaoFluxocaixaRepository()
);
