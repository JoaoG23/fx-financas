import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";

import { ElementoDto } from "../elementos.dto/Elementos.dto";
import { IElementosRepository } from "./InterfaceElementosRepository";
import { PrismaConexao } from "../../configs/PrismaConexao";

export class ElementosRepository implements IElementosRepository {
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = PrismaConexao.getInstancia();
    this.paginacao = new Paginacao();
  }

  async save(data: ElementoDto) {
    return await this.prisma.elementos.create({
      data,
    });
  }

  async updateById(id: string, newData: ElementoDto) {
    return await this.prisma.elementos.update({
      where: { id },
      data: newData,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.elementos.delete({
      where: { id },
    });
  }
  async deleteAllByUsuariosId(usuariosId: string) {
    return await this.prisma.elementos.deleteMany({
      where: { usuariosId },
    });
  }

  async findById(id: string) {
    const Elementos = await this.prisma.elementos.findFirst({
      where: { id },
    });
    return Elementos;
  }

  async findAll() {
    return await this.prisma.elementos.findMany({});
  }

  async findAllByUsuariosId(usuariosId: string) {
    return await this.prisma.elementos.findMany({
      where: { usuariosId },
    });
  }

  async countAll() {
    const contagem = await this.prisma.elementos.count();
    return contagem;
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
    const elementos = await this.prisma.elementos.findMany({
      where: {
        usuariosId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, elementos];
  }
}
