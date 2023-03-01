import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../../utils/Paginacao";
import { ISubtiposBuscas } from "./ISubtiposBuscas";

export class SubtiposBuscasServices implements ISubtiposBuscas {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }

  async buscarPorId(id: string) {
    const subtipos = await this.prismaService.subtipos.findFirst({
      where: { id },
    });
    return subtipos;
  }

  async listarTodos() {
    const subtipos = await this.prismaService.subtipos.findMany({});
    return subtipos;
  }
  async listaPorId(id: string) {
    const subtipos = await this.prismaService.subtipos.findUnique({
      where: { id },
    });
    return subtipos;
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.subtipos.count();
    return contagem;
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subtipos = await this.prismaService.subtipos.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subtipos];
  }

  async listarPorTiposPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    tiposId: string
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subtipos = await this.prismaService.subtipos.findMany({
      where: {
        tiposId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subtipos];
  }
}
