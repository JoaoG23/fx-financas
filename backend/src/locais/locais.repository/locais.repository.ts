import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { ILocaisRepository } from "./InterfaceLocaisRepository";
import { LocaisDto } from "../locais.dto/locais.dto";

export class LocaisRepository implements ILocaisRepository {
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
    this.paginacao = new Paginacao();
  }
  delete(id: string) {
    throw new Error("Method not implemented.");
  }
  findAll() {
    throw new Error("Method not implemented.");
  }
  countAll() {
    throw new Error("Method not implemented.");
  }
  findAllByPageAndUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    throw new Error("Method not implemented.");
  }

  async save(data: LocaisDto) {
    return await this.prisma.locais.create({
      data,
    });
  }

  async update(id: string, newData: LocaisDto) {
    return await this.prisma.locais.update({
      where: { id },
      data: newData,
    });
  }

  // async delete(id: string) {
  //   return await this.prisma.Locais.delete({
  //     where: { id },
  //   });
  // }

  async findById(id: string) {
    const Locais = await this.prisma.locais.findFirst({
      where: { id },
    });
    return Locais;
  }

  // async findAll() {
  //   return await this.prisma.Locais.findMany({});
  // }
  // async countAll() {
  //   const contagem = await this.prisma.Locais.count();
  //   return contagem;
  // }

  // async findAllByPageAndUsuariosId(
  //   numeroPagina: number,
  //   quantidadeItemPagina: number,
  //   usuariosId: string
  // ) {
  //   const quantidadeTotalRegistros = await this.countAll();
  //   const itemsPorPagina = Number(quantidadeItemPagina);

  //   const totalQuantidadePaginas =
  //     await this.paginacao.retornaQuantidadePaginas(
  //       quantidadeTotalRegistros,
  //       itemsPorPagina
  //     );

  //   const pularPagina = (numeroPagina - 1) * itemsPorPagina;
  //   const Locais = await this.prisma.Locais.findMany({
  //     where: {
  //       usuariosId,
  //     },
  //     skip: pularPagina,
  //     take: itemsPorPagina,
  //   });

  //   return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, Locais];
  // }
}
