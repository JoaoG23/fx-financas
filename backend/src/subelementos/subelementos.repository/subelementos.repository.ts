import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { SubelementosRepositoryInterface } from "./InterfaceSubelementosRepository";
import { SubelementoDto } from "../subelementos.dto/subelementos.dto";

export class SubelementosRepository implements SubelementosRepositoryInterface {
  private paginacao: Paginacao;
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
    this.paginacao = new Paginacao();
  }

  async save(data: SubelementoDto) {
    const subelementos = await this.prisma.subelementos.create({
      data,
    });
    return subelementos;
  }

  async updateById(id: string, newData: SubelementoDto) {
    const subelementos = await this.prisma.subelementos.update({
      where: { id },
      data: newData,
    });
    return subelementos;
  }

  async deleteById(id: string) {
    return this.prisma.subelementos.delete({
      where: { id },
    });
  }

  async countAllByElementosId(elementosId: string) {
    const contagem = await this.prisma.subelementos.count({
      where: { elementosId },
    });
    return contagem;
  }

  async findAllByUsuariosId(usuariosId: string) {
    return await this.prisma.subelementos.findMany({
      where: {
        usuariosId,
      },
    });
  }

  async findAllByPageAndElementosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    elementosId: string
  ) {
    const quantidadeTotalRegistros = await this.countAllByElementosId(
      elementosId
    );
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subelementos = await this.prisma.subelementos.findMany({
      where: {
        elementosId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subelementos];
  }

  async findAllByElementosId(elementosId: string) {
    return await this.prisma.subelementos.findMany({
      where: {
        elementosId,
      },
    });
  }

  async findById(id: string) {
    const subelementos = await this.prisma.subelementos.findFirst({
      where: { id },
    });
    return subelementos;
  }
}
