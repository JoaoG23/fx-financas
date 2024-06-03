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
import { ProgramacaoFluxocaixaRepositoryInterface } from "../programacaofluxocaixa.repository/Programacaofluxocaixa.repository.Interface";

export class ProgramacaoFluxocaixaServices {
  constructor(
    private programacaofluxocaixaRepository: ProgramacaoFluxocaixaRepositoryInterface,
    private fluxocaixaService: IFluxoCaixaService
  ) {}

  async validarNaoExisteProgramacoes(usuariosId: string) {
    const programacoes =
      await this.programacaofluxocaixaRepository.findAllByUsuariosId(
        usuariosId
      );

    const isExisteProgramacoes = programacoes.length;
    if (!isExisteProgramacoes) {
      throw new Error("Não existe programações para efetuar a captura");
    }
  }

  async buscarPorId(id: string) {
    return await this.programacaofluxocaixaRepository.findById(id);
  }

  async pesquisarPorCriterio(criterios: ProgramacaoFluxocaixaVisualizarDto) {
    const idUsuario = criterios?.usuariosId;
    const somaTodasProgramacaoDeReceita =
      await this.programacaofluxocaixaRepository.sumBiggerThanZeroByUsuariosId(
        idUsuario
      );
    const programacoes =
      await this.programacaofluxocaixaRepository.findAllByCriterios(criterios);
    return [{ somaTodasProgramacaoDeReceita }, programacoes];
  }

  async listarTodosPorUsuarioId(usuariosId: string) {
    const programacoes =
      await this.programacaofluxocaixaRepository.findAllByUsuariosId(
        usuariosId
      );
    return programacoes;
  }
  async buscarTodosPorUsuarioIdComDescricao(usuariosId: string) {
    const programacoes =
      await this.programacaofluxocaixaRepository.findAllByUsuariosIdAndDescription(
        usuariosId
      );
    return programacoes;
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    return await this.programacaofluxocaixaRepository.findAllByPage(
      numeroPagina,
      quantidadeItemPagina
    );
  }

  async criar(programacaofluxocaixaDto: ProgramacaoFluxocaixaCriadoDto) {
    const programacaofluxocaixa =
      await this.programacaofluxocaixaRepository.save({
        ...programacaofluxocaixaDto,
      });
    return programacaofluxocaixa;
  }

  async capturarProgramacaoEInserirEmFluxoCaixa(usuariosId: string) {
    await this.validarNaoExisteProgramacoes(usuariosId);

    const programacoes: ProgramacaoFluxocaixaVisualizarDto[] =
      await this.programacaofluxocaixaRepository.findAllByUsuariosIdAtivo(
        usuariosId
      );

    const itemsProgramados: FluxocaixaDto[] = [];

    const dataAtual = await buscarDatahoraAtualBancoDados();
    for (const programacao of programacoes) {
      const { createdAt, id, data_insersao, ativo, ...restanteProgramacao } =
        programacao;

      const itemFluxocaixa = {
        ...restanteProgramacao,
        data_insersao: dataAtual,
        inserido_via_programacao: programacao.id,
      };
      itemsProgramados.push(itemFluxocaixa as FluxocaixaDto);
    }

    return await this.fluxocaixaService.criarVarios(itemsProgramados);
  }

  async atualizarUmPorId(
    id: string,
    dadosNovos: ProgramacaoFluxocaixaCriadoDto
  ) {
    const existeIdprogramacaofluxocaixa: any =
      await this.programacaofluxocaixaRepository.findById(id);
    if (!existeIdprogramacaofluxocaixa) {
      throw new Error("Não existe esse ID para ser atualizado");
    }
    const programacaofluxocaixa =
      await this.programacaofluxocaixaRepository.updateById(id, dadosNovos);
    return programacaofluxocaixa;
  }

  async deletarUmPorId(id: any) {
    const existeIdprogramacaofluxocaixa =
      await this.programacaofluxocaixaRepository.findById(id);
    if (!existeIdprogramacaofluxocaixa) {
      throw new Error("Não há esse Id para ser excluido");
    }

    return this.programacaofluxocaixaRepository.deleteById(id);
  }
}

const programacaofluxocaixaRepository = new ProgramacaoFluxocaixaRepository();
const fluxocaixaService = new FluxoCaixaServices(new FluxoCaixaRepository());

export default new ProgramacaoFluxocaixaServices(
  programacaofluxocaixaRepository,
  fluxocaixaService
);
