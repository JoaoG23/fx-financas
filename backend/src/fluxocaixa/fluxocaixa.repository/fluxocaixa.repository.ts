import { PrismaClient } from "@prisma/client";
import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";
import { Paginacao } from "../../utils/Paginacao";
import { joinDescricaoSelect } from "./utils/joinDescricaoSelect";

export interface IFluxocaixaRepository {
  save(data: FluxocaixaDto);
  update(id: string, newData: FluxocaixaDto);
  delete(id: string);
  findById(id: string);
  findLastItem();
  findAll();
  describeAllFields();
  countAllByIdUsuario(usuariosId: string);
  updateLastItemSaldo(valor: number, usuariosId: string);
  sumBiggerThanZero(usuarioId: string);
  sumLessThanZero(usuarioId: string);
  findAllByPageAndUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );
  findAllByPageAndUsuariosIdAndThisMonth(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );
}

export class FluxoCaixaRepository implements IFluxocaixaRepository {
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
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
      subtipos: {
        select: {
          id: true,
          descricao: true,
        },
      },
    };
  }

  async findAllByPageAndUsuariosIdAndThisMonth(
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
          orderador: "desc",
        },
      ],

      where: {
        usuariosId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }

  async updateLastItemSaldo(valor: number, usuariosId: string) {
    return await this.prisma.$executeRawUnsafe(
      `UPDATE fluxocaixa SET saldo = $1 where orderador = (SELECT MAX(orderador) FROM fluxocaixa) AND "usuariosId" = $2`,
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

  async findById(id: string) {
    const fluxocaixa = await this.prisma.fluxocaixa.findFirst({
      where: { id },
      include: this.describeAllFields(),
    });
    return fluxocaixa;
  }

  async findLastItem() {
    return await this.prisma.fluxocaixa.findFirst({
      orderBy: {
        orderador: "desc",
      },
      take: 1,
    });
  }

  async findAll() {
    return await this.prisma.fluxocaixa.findMany({
      include: this.describeAllFields(),
    });
  }

  async countAllByIdUsuario(usuariosId: string) {
    const contagem = await this.prisma.fluxocaixa.count({
      where: { usuariosId },
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
          orderador: "desc",
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
}
