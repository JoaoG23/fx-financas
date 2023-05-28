import { PrismaClient } from "@prisma/client";
import { Paginacao } from "../../utils/Paginacao";
import { LocaisRepositoryInteface } from "./InterfaceLocaisRepository";
import { LocaisDto } from "../locais.dto/locais.dto";

export class LocaisRepository implements LocaisRepositoryInteface {
  private paginacao: Paginacao;
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
    this.paginacao = new Paginacao();
  }

  async updateById(id: string, local: LocaisDto) {
    return await this.prisma.locais.update({
      where: { id },
      data: local,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.locais.delete({
      where: { id },
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

  async save(data: LocaisDto) {
    return await this.prisma.locais.create({
      data,
    });
  }

  async findById(id: string) {
    const Locais = await this.prisma.locais.findFirst({
      where: { id },
    });
    return Locais;
  }

}
