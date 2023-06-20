import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../../utils/Paginacao";
import { ISubelementoBuscas } from "./ISubelementoBuscas";

export class SubelementoBuscasServices {
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

  async listarTodosPorElementosId(elementosId: string) {
    const subelemento = await this.prismaService.subelementos.findMany({
      where: { elementosId },
    });
    return subelemento;
  }

  async listarTodosPorUsuariosId(usuariosId: string) {
    const subelemento = await this.prismaService.subelementos.findMany({
      where: { usuariosId },
    });
    return subelemento;
  }

  async contarTotalRegistrosPorElemento(elementosId: string) {
    const contagem = await this.prismaService.subelementos.count({
      where: {
        elementosId,
      },
    });
    return contagem;
  }



  async listarPorElementosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    elementosId: string
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistrosPorElemento(elementosId);
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subelementos = await this.prismaService.subelementos.findMany({
      where: {
        elementosId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subelementos];
  }
}
