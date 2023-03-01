import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../../utils/Paginacao";
import { ISubelementoBuscas } from "./ISubelementoBuscas";

export class SubelementoBuscasServices implements ISubelementoBuscas {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }

  async buscarPorTipoId(id: string) {
    return await this.prismaService.tipos.findFirst({
      where: { id },
    });
  }

  async buscarPorId(id: string) {
    const subelemento = await this.prismaService.subelementos.findFirst({
      where: { id },
    });
    return subelemento;
  }

  async listarTodos() {
    const subelemento = await this.prismaService.subelementos.findMany({});
    return subelemento;
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.subelementos.count();
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
    const subelementos = await this.prismaService.subelementos.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subelementos];
  }

  async listarPorElementosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    elementosId: any
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subelementos = await this.prismaService.subelementos.findMany({
      where: {
        elementosId
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subelementos];
  }
}
