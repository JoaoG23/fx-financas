import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { SubtiposDto } from "../subtipos.dto/subtipos.dto";

import { SubtiposRepositoryInterface } from "./InterfaceSubtiposRepository";
import { PrismaConexao } from "../../configs/PrismaConexao";

export class SubtiposRepository implements SubtiposRepositoryInterface {
  private paginacao: Paginacao;
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaConexao.getInstancia();
    this.paginacao = new Paginacao();
  }

  async save(data: SubtiposDto) {
    const subtipos = await this.prisma.subtipos.create({
      data,
    });
    return subtipos;
  }

  async updateById(id: string, newData: SubtiposDto) {
    const subtipos = await this.prisma.subtipos.update({
      where: { id },
      data: newData,
    });
    return subtipos;
  }

  async deleteById(id: string) {
    return await this.prisma.subtipos.delete({
      where: { id },
    });
  }

  async deleteAllByUsuariosId(usuariosId: string) {
    return await this.prisma.subtipos.deleteMany({
      where: { usuariosId },
    });
  }

  async findAllByUsuariosId(usuariosId: string) {
    const subtipos = await this.prisma.subtipos.findMany({
      where: {
        usuariosId,
      },
    });

    return subtipos;
  }

  async findAllByPageAndTiposId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    tiposId: string
  ) {
    const quantidadeTotalRegistros = await this.countAllByTiposId(tiposId);
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const subtipos = await this.prisma.subtipos.findMany({
      where: {
        tiposId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, subtipos];
  }

  async findById(id: string) {
    const subtipos = await this.prisma.subtipos.findFirst({
      where: { id },
    });
    return subtipos;
  }
  async findAllByTiposId(tiposId: string) {
    return await this.prisma.subtipos.findMany({
      where: {
        tiposId,
      },
    });
  }

  async countAllByTiposId(tiposId: string) {
    const contagem = await this.prisma.subtipos.count({
      where: { tiposId },
    });
    return contagem;
  }
}
