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
  countAll();
  updateLastItemSaldo(valor: number, usuariosId: string);
  sumBiggerThanZero(usuarioId: string);
  sumLessThanZero(usuarioId: string);
  findAllByPage(numeroPagina: number, quantidadeItemPagina: number);
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

  async findAllByPageAndUsuariosIdAndThisMonth(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    const quantidadeTotalRegistros = await this.countAll();
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
      include: joinDescricaoSelect,
    });
  }
  async countAll() {
    const contagem = await this.prisma.fluxocaixa.count();
    return contagem;
  }

  async findAllByPage(numeroPagina: number, quantidadeItemPagina: number) {
    const quantidadeTotalRegistros = await this.countAll();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const fluxocaixa = await this.prisma.fluxocaixa.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }

  async findAllByPageAndUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    const quantidadeTotalRegistros = await this.countAll();
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
      include: {
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
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }
}
