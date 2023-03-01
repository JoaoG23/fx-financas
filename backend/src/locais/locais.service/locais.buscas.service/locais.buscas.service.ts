
  import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../../utils/Paginacao";

export class LocaisBuscasServices  {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }

  async buscarPorId(id: string) {
    const locais = await this.prismaService.locais.findFirst({
      where: { id },
    });
    return locais;
  }

  async listarTodos() {
    const locais = await this.prismaService.locais.findMany({});
    return locais;
  }
  async listaPorId(id: string) {
    const locais = await this.prismaService.locais.findUnique({
      where: { id },
    });
    return locais;
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.locais.count();
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
    const locais = await this.prismaService.locais.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, locais];
  }
}

  
  