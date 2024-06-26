import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { LocaisRepositoryInteface } from "./InterfaceLocaisRepository";
import { LocaisDto } from "../locais.dto/locais.dto";
import { PrismaConexao } from "../../configs/PrismaConexao";

export class LocaisRepository implements LocaisRepositoryInteface {
  private paginacao: Paginacao;
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaConexao.getInstancia();
    this.paginacao = new Paginacao();
  }
  async findAllByUsuariosId(usuariosId: string) {
    return await this.prisma.locais.findMany({ where: { usuariosId } });
  }

  async updateById(id: string, local: LocaisDto) {
    return await this.prisma.locais.update({
      where: { id },
      data: local,
    });
  }
  async deleteAllByUsuariosId(usuariosId: string) {
    return await this.prisma.locais.deleteMany({
      where: { usuariosId },
    });
  }

  async deleteById(id: string) {
    return await this.prisma.locais.delete({
      where: { id },
    });
  }

  async save(data: LocaisDto) {
    return await this.prisma.locais.create({
      data,
    });
  }

  async countAllByUsuariosId(usuariosId: string) {
    return await this.prisma.locais.count({
      where: { usuariosId },
    });
  }

  async findAllByPageAndUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    const quantidadeTotalRegistros = await this.countAllByUsuariosId(
      usuariosId
    );
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const fluxocaixa = await this.prisma.locais.findMany({
      where: {
        usuariosId,
      },
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }

  async findById(id: string) {
    const locais = await this.prisma.locais.findFirst({
      where: { id },
    });
    return locais;
  }
}
