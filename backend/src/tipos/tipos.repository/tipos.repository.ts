import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { TiposDto } from "../tipos.dto/tipos.dto";
import { TiposRepositoryInterface } from "./InterfaceTiposRepository";

export class TiposRepository implements TiposRepositoryInterface {
  private paginacao: Paginacao;
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.paginacao = new Paginacao();
  }

  async save(data: TiposDto) {
    const tipos = await this.prisma.tipos.create({
      data,
    });
    return tipos;
  }

  async updateById(id: string, newData: TiposDto) {
    const tipos = await this.prisma.tipos.update({
      where: { id },
      data: newData,
    });
    return tipos;
  }

  async deleteById(id: string) {
    return this.prisma.tipos.delete({
      where: { id },
    });
  }

  async deleteAllByUsuariosId(usuariosId: string) {
    return await this.prisma.tipos.deleteMany({
      where: { usuariosId },
    });
  }

  async countAllBySubelementosId(subelementosId: string) {
    const contagem = await this.prisma.tipos.count({
      where: { subelementosId },
    });
    return contagem;
  }

  async findAllByUsuariosId(usuariosId: string) {
    return await this.prisma.tipos.findMany({
      where: {
        usuariosId,
      },
    });
  }

  async findAllByPageAndSubelementosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    subelementosId: string
  ) {
    const quantidadeTotalRegistros = await this.countAllBySubelementosId(
      subelementosId
    );
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subelementos = await this.prisma.tipos.findMany({
      where: {
        subelementosId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subelementos];
  }

  async findAllBySubelementosId(subelementosId: string) {
    return await this.prisma.tipos.findMany({
      where: {
        subelementosId,
      },
    });
  }

  async findById(id: string) {
    const tipos = await this.prisma.tipos.findFirst({
      where: { id },
    });
    return tipos;
  }
}
