import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../../utils/Paginacao";

export class SubtiposBuscasServices {
  prismaService: PrismaClient;
  paginacaoService: Paginacao;

  constructor() {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
  }



  async listarTodos() {
    const subtipos = await this.prismaService.subtipos.findMany({});
    return subtipos;
  }

  async listarTodosPorTiposId(tiposId: string) {
    const subtipos = await this.prismaService.subtipos.findMany({
      where: { tiposId },
    });
    return subtipos;
  }

  async listaUmPorId(id: string) {
    const subtipos = await this.prismaService.subtipos.findUnique({
      where: { id },
    });
    return subtipos;
  }

  async listaPorTodosUsuariosId(usuariosId: string) {
    const subtipos = await this.prismaService.subtipos.findMany({
      where: { usuariosId },
    });
    return subtipos;
  }

  async contarTotalRegistrosPorTiposId(tiposId: string) {
    const contagem = await this.prismaService.subtipos.count({
      where: { tiposId },
    });
    return contagem;
  }

  async listarPorTiposPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    tiposId: string
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistrosPorTiposId(
      tiposId
    );
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
