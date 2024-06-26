import { PrismaClient } from "@prisma/client";
import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";

import { CriteriosPesquisa } from "../interfaces/CriteriosPesquisa";

import { pesquisarSemData } from "./utils/pesquisarPorCriterio/pesquisarPorCriterio";
import { buscarPrimeiroDiaMesAtual } from "../../utils/datetime/buscarPrimeiroDiaMesAtual/buscarPrimeiroDiaMesAtual";
import { Paginacao } from "../../utils/Paginacao";
import { buscarUltimoDiaMesAtual } from "../../utils/datetime/buscarUltimoDiaMesAtual/buscarUltimoDiaMesAtual";

import { IFluxocaixaRepository } from "./IFluxocaixaRepository";
import { PrismaConexao } from "../../configs/PrismaConexao";

export class FluxoCaixaRepository implements IFluxocaixaRepository {
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = PrismaConexao.getInstancia()
    this.paginacao = new Paginacao();
  }

  describeAllFields() {
    return {
      elementos: {
        select: {
          descricao: true,
        },
      },
      subelementos: {
        select: {
          descricao: true,
        },
      },
      locais: {
        select: {
          id: true,
          descricao: true,
        },
      },
      tipos: {
        select: {
          descricao: true,
        },
      },
      tipos_despesas: {
        select: {
          descricao: true,
        },
      },
      subtipos: {
        select: {
          descricao: true,
        },
      },
    };
  }

  describeAndIdAllFields() {
    return {
      elementos: {
        select: {
          id: true,
          descricao: true,
        },
      },
      subelementos: {
        select: {
          id: true,
          descricao: true,
        },
      },
      locais: {
        select: {
          id: true,
          descricao: true,
        },
      },
      tipos: {
        select: {
          id: true,
          descricao: true,
        },
      },
      tipos_despesas: {
        select: {
          descricao: true,
        },
      },
      subtipos: {
        select: {
          id: true,
          descricao: true,
        },
      },
    };
  }

 
  async updateLastItemSaldo(valor: number, usuariosId: string) {
    return await this.prisma.$executeRawUnsafe(
      `UPDATE fluxocaixa SET saldo = $1 where orderador = (SELECT MAX(orderador)  
        FROM public.fluxocaixa 
        WHERE "usuariosId" = $2
        ) AND "usuariosId" = $2`,
      valor,
      usuariosId
    );
  }

  
  async sumBiggerThanZero(usuariosId: string) {
    return await this.prisma.fluxocaixa.aggregate({
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
  }

  async sumLessThanZero(usuariosId: string) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          lt: 0,
        },
        usuariosId,
      },
    });
  }

  async saveMany(fluxocaixaDto: FluxocaixaDto[]) {
    return await this.prisma.fluxocaixa.createMany({
      data: fluxocaixaDto,
    });
  }

  async save(data: FluxocaixaDto) {
    return await this.prisma.fluxocaixa.create({
      data,
    });
  }

  async update(id: string, newData: FluxocaixaDto) {
    return await this.prisma.fluxocaixa.update({
      where: { id },
      data: newData,
    });
  }

  async delete(id: string) {
    return await this.prisma.fluxocaixa.delete({
      where: { id },
    });
  }
  async deleteAllByUsuariosId(usuariosId: string) {
    return await this.prisma.fluxocaixa.deleteMany({
      where: { usuariosId },
    });
  }

  async findById(id: string) {
    const fluxocaixa = await this.prisma.fluxocaixa.findFirst({
      where: { id },
      include: this.describeAllFields(),
    });
    return fluxocaixa;
  }

  async findLastItemByUsuariosId(usuariosId: string) {
    return await this.prisma.fluxocaixa.findFirst({
      where: { usuariosId },
      orderBy: {
        orderador: "desc",
      },
    });
  }

  async findAllByUsuariosId(usuariosId: string) {
    return await this.prisma.fluxocaixa.findMany({
      where: { usuariosId },
      include: this.describeAllFields(),
    });
  }

  async countAllByIdUsuario(usuariosId: string) {
    const contagem = await this.prisma.fluxocaixa.count({
      where: { usuariosId },
    });
    return contagem;
  }

  async countAllByIdUsuarioThisMonth(usuariosId: string) {
    const firstDayOfMonth = buscarPrimeiroDiaMesAtual();
    const lastDayOfMonth = buscarUltimoDiaMesAtual();

    const contagem = await this.prisma.fluxocaixa.count({
      where: {
        data_insersao: {
          gte: firstDayOfMonth,
          lt: lastDayOfMonth,
        },
        usuariosId,
      },
    });
    return contagem;
  }

  async findAllByPageAndUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    const quantidadeTotalRegistros = await this.countAllByIdUsuario(usuariosId);
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const fluxocaixa = await this.prisma.fluxocaixa.findMany({
      orderBy: [
        {
          data_insersao: "desc",
        },
      ],
      where: {
        usuariosId,
      },
      include: this.describeAllFields(),
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }

  async findAllByPageAndUsuariosIdAndThisMonth(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    const quantidadeTotalRegistros = await this.countAllByIdUsuarioThisMonth(
      usuariosId
    );
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;

    const firstDayOfMonth = buscarPrimeiroDiaMesAtual();
    const lastDayOfMonth = buscarUltimoDiaMesAtual();
    const fluxocaixa = await this.prisma.fluxocaixa.findMany({
      orderBy: [
        {
          data_insersao: "desc",
        },
      ],
      where: {
        data_insersao: {
          gte: firstDayOfMonth,
          lt: lastDayOfMonth,
        },
        usuariosId,
      },
      include: this.describeAllFields(),
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }

  async findAllByCriterios(criterios: CriteriosPesquisa) {
    return await pesquisarSemData(criterios);
  }
}
