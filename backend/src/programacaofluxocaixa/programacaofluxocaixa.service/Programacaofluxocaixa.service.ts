import { FluxocaixaDto } from "../../fluxocaixa/fluxocaixa.dto/fluxocaixa.dto";
import { FluxoCaixaRepository } from "../../fluxocaixa/fluxocaixa.repository/fluxocaixa.repository";

import { IFluxoCaixaService } from "../../fluxocaixa/fluxocaixa.service/fluxocaixa.interface.service";
import { FluxoCaixaServices } from "../../fluxocaixa/fluxocaixa.service/fluxocaixa.service";
import { buscarDatahoraAtualBancoDados } from "../../utils/datetime/buscarDatahoraAtualBancoDados/buscarDatahoraAtualBancoDados";

import {
  ProgramacaoFluxocaixaCriadoDto,
  ProgramacaoFluxocaixaVisualizarDto,
} from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";

import { ProgramacaoFluxocaixaRepository } from "../programacaofluxocaixa.repository/Programacaofluxocaixa.repository";
import { IProgramacaoFluxocaixaRepository } from "../programacaofluxocaixa.repository/Programacaofluxocaixa.repository.Interface";

export class ProgramacaoFluxocaixaServices {
  constructor(
    private programacaofluxocaixaRepository: IProgramacaoFluxocaixaRepository,
    private fluxocaixaService: IFluxoCaixaService
  ) {}

  async validarNaoExisteProgramacoes(usuariosId: string) {
    const programacoes =
      await this.programacaofluxocaixaRepository.buscarTodosPorUsuarioId(
        usuariosId
      );

    const isExisteProgramacoes = programacoes.length;
    if (!isExisteProgramacoes) {
      throw new Error("Não existe programações para efetuar a captura");
    }
  }

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

  async listarTodosPorUsuarioId(usuariosId: string) {
    const programacoes =
      await this.programacaofluxocaixaRepository.buscarTodosPorUsuarioId(
        usuariosId
      );
    return programacoes;
  }
  async buscarTodosPorUsuarioIdComDescricao(usuariosId: string) {
    const programacoes =
      await this.programacaofluxocaixaRepository.buscarTodosPorUsuarioIdComDescricao(
        usuariosId
      );
    return programacoes;
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

  async criar(programacaofluxocaixaDto: ProgramacaoFluxocaixaCriadoDto) {
    const programacaofluxocaixa =
      await this.programacaofluxocaixaRepository.salvar({
        ...programacaofluxocaixaDto,
      });
    return programacaofluxocaixa;
  }

  async capturarProgramacaoEInserirEmFluxoCaixa(usuariosId: string) {
    await this.validarNaoExisteProgramacoes(usuariosId);

    const programacoes =
      await this.programacaofluxocaixaRepository.buscarTodosPorUsuarioId(
        usuariosId
      );

    const itemsProgramados: FluxocaixaDto[] = [];
    
    const dataAtual = await buscarDatahoraAtualBancoDados();
    for (const programacao of programacoes) {
      const { createdAt, id, data_insersao, ...restanteProgramacao } =
        programacao;

      const fluxocaixa = {
        ...restanteProgramacao,
        data_insersao: dataAtual,
        inserido_via_programacao: programacao.id,
      };
      itemsProgramados.push(fluxocaixa);
    }

    return await this.fluxocaixaService.criarVarios(itemsProgramados);
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

const programacaofluxocaixaRepository = new ProgramacaoFluxocaixaRepository();
const fluxocaixaService = new FluxoCaixaServices(new FluxoCaixaRepository());

export default new ProgramacaoFluxocaixaServices(
  programacaofluxocaixaRepository,
  fluxocaixaService
);
