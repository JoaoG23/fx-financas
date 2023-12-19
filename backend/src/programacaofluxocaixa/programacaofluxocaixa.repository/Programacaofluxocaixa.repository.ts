import { PrismaClient } from "@prisma/client";

import { Paginacao } from "../../utils/Paginacao";
import { joinDescricaoSelect } from "./utils/joinDescricaoSelect";
import { pesquisarSemData } from "./utils/pesquisarPorCriterio/pesquisarPorCriterio";

import { ProgramacaoFluxocaixaCriadoDto } from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";
import { ProgramacaoFluxocaixaRepositoryInterface } from "./Programacaofluxocaixa.repository.Interface";

export class ProgramacaoFluxocaixaRepository
  implements ProgramacaoFluxocaixaRepositoryInterface
{
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
    this.paginacao = new Paginacao();
  }
  async findAllByUsuariosId(usuariosId: string) {
    return await this.prisma.programacao_fluxocaixa.findMany({
      where: { usuariosId },
    });
  }
  async findAllByUsuariosIdAndDescription(usuariosId: string) {
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
        tipos_despesas: {
          select: {
            descricao: true,
          },
        },
      },
    });
  }

  async sumBiggerThanZeroByUsuariosId(usuariosId: string) {
    const {
      _sum: { valor: result },
    } = await this.prisma.programacao_fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          gt: 0,
        },
        usuariosId,
      },
    });

    return result;
  }

  async save(programacao: ProgramacaoFluxocaixaCriadoDto) {
    return await this.prisma.programacao_fluxocaixa.create({
      data: programacao,
    });
  }

  async updateById(id: string, programacao: ProgramacaoFluxocaixaCriadoDto) {
    return await this.prisma.programacao_fluxocaixa.update({
      where: { id },
      data: programacao,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.programacao_fluxocaixa.delete({
      where: { id },
    });
  }
  async deleteAllByUsuariosId(usuariosId: string) {
    return await this.prisma.programacao_fluxocaixa.deleteMany({
      where: { usuariosId },
    });
  }

  async findById(id: string) {
    const programacaofluxocaixa =
      await this.prisma.programacao_fluxocaixa.findFirst({
        where: { id },
      });
    return programacaofluxocaixa;
  }

  async countAllByCriterios(criterios: object) {
    const count = await this.prisma.programacao_fluxocaixa.count({
      where: criterios,
    });
    return count;
  }

  async findAllByCriterios(criterios: ProgramacaoFluxocaixaCriadoDto) {
    return await pesquisarSemData(criterios);
  }

  async findAll() {
    return await this.prisma.programacao_fluxocaixa.findMany({
      include: joinDescricaoSelect,
    });
  }

  async findAllByPage(numeroPagina: number, quantidadeItemPagina: number) {
    const quantidadeTotalRegistros = await this.countAllByCriterios({});
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
