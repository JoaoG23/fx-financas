import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../../utils/Paginacao";
import { IElementoBuscas } from "./IElementoBuscar";

export class ElementoBuscasServices implements IElementoBuscas {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }

  async buscarPorId(id: string) {
    const elemento = await this.prismaService.elementos.findFirst({
      where: { id },
    });
    return elemento;
  }

  async listarTodos() {
    const elementos = await this.prismaService.elementos.findMany({});
    return elementos;
  }
  async listaPorId(id: string) {
    const elemento = await this.prismaService.elementos.findUnique({
      where: { id },
    });
    return elemento;
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.elementos.count();
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
    const elementos = await this.prismaService.elementos.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, elementos];
  }


  async listarPorUsuarioPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const elementos = await this.prismaService.elementos.findMany({
      where: {
        usuariosId
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, elementos];
  }
}
