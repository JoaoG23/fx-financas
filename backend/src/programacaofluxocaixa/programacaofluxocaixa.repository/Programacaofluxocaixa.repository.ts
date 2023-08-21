import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { joinDescricaoSelect } from "./utils/joinDescricaoSelect";
import { IProgramacaoFluxocaixaRepository } from "./Programacaofluxocaixa.repository.Interface";
import {
  ProgramacaoFluxocaixaCriadoDto,
  ProgramacaoFluxocaixaVisualizarDto,
} from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";

export class ProgramacaoFluxocaixaRepository
  implements IProgramacaoFluxocaixaRepository
{
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
    this.paginacao = new Paginacao();
  }
  async buscarTodosPorUsuarioId(usuariosId: string) {
    return await this.prisma.programacao_fluxocaixa.findMany({
      where: { usuariosId },
    });
  }
  async buscarTodosPorUsuarioIdComDescricao(usuariosId: string) {
    return await this.prisma.programacao_fluxocaixa.findMany({
      where: { usuariosId },
      include: {
        locais: {
          select: {
            descricao: true,
          },
        },
        elementos: {
          select: {
            descricao: true,
          },
        },
        tipos: {
          select: {
            descricao: true,
          },
        },
        subelementos: {
          select: {
            descricao: true,
          },
        },
        subtipos: {
          select: {
            descricao: true,
          },
        },
      },
    });
  }

  pesquisarPorCriterios(
    criterios: Omit<ProgramacaoFluxocaixaVisualizarDto, "ativo">
  ) {
    throw new Error("Method not implemented.");
  }

  async salvar(data: ProgramacaoFluxocaixaCriadoDto) {
    return await this.prisma.programacao_fluxocaixa.create({
      data: data,
    });
  }
  async atualizarPorId(id: string, newData: any) {
    return await this.prisma.programacao_fluxocaixa.update({
      where: { id },
      data: newData,
    });
  }
  async deletarPorId(id: string) {
    return await this.prisma.programacao_fluxocaixa.delete({
      where: { id },
    });
  }
  async buscarPorId(id: string) {
    const programacaofluxocaixa =
      await this.prisma.programacao_fluxocaixa.findFirst({
        where: { id },
      });
    return programacaofluxocaixa;
  }
  async buscarTodos() {
    return await this.prisma.programacao_fluxocaixa.findMany({
      include: joinDescricaoSelect,
    });
  }
  async contarTodosPorCriterio(criterios: object) {
    const count = await this.prisma.programacao_fluxocaixa.count({
      where: criterios,
    });
    return count;
  }

  async buscarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    const quantidadeTotalRegistros = await this.contarTodosPorCriterio({});
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const itemsPagina = await this.prisma.programacao_fluxocaixa.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsPagina];
  }
}
