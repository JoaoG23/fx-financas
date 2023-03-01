import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../../utils/Paginacao";
import { ITiposBuscas } from "./ITiposBuscas";

export class TiposBuscasServices implements ITiposBuscas {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }
  buscarPorTipoId(id: string) {
    throw new Error("Method not implemented.");
  }

  
  async listarPorSubelementosPorPagina(numeroPagina: number, quantidadeItemPagina: number, subelementosId:string) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subelementos = await this.prismaService.tipos.findMany({
      where: {
        subelementosId
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subelementos];
  }

  async buscarPorId(id: string) {
    const tipos = await this.prismaService.tipos.findFirst({
      where: { id },
    });
    return tipos;
  }

  async listarTodos() {
    const tipos = await this.prismaService.tipos.findMany({});
    return tipos;
  }
  async listaPorId(id: string) {
    const tipos = await this.prismaService.tipos.findUnique({
      where: { id },
    });
    return tipos;
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.tipos.count();
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
    const tipos = await this.prismaService.tipos.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, tipos];
  }
}
