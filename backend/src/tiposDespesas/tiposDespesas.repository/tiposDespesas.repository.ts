import { PrismaClient } from "@prisma/client";

import { Paginacao } from "../../utils/Paginacao";

import { TipoDespesaDto } from "../tiposDespesas.dto/tiposDespesas.dto";
import { TiposDespesasRepositoryInteface } from "./tiposDespesas.repositoryInterface";
import { PrismaConexao } from "../../configs/PrismaConexao";

export class TiposDespesasRepository
  implements TiposDespesasRepositoryInteface
{
  private paginacao: Paginacao;
  private prisma: PrismaClient;

  constructor() {
    this.prisma = PrismaConexao.getInstancia();
    this.paginacao = new Paginacao();
  }

  async updateById(id: string, tipoDespesa: TipoDespesaDto) {
    return await this.prisma.tipos_despesas.update({
      where: { id },
      data: tipoDespesa,
    });
  }

  async deleteById(id: string) {
    return await this.prisma.tipos_despesas.delete({
      where: { id },
    });
  }

  async countAll() {
    return await this.prisma.tipos_despesas.count({});
  }

  async findAll() {
    return await this.prisma.tipos_despesas.findMany({});
  }

  async findById(id: string) {
    const TipoDespesa = await this.prisma.tipos_despesas.findFirst({
      where: { id },
    });
    return TipoDespesa;
  }

  async findAllByPage(numeroPagina: number, quantidadeItemPagina: number) {
    const quantidadeTotalRegistros = await this.countAll();

    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacao.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const fluxocaixa = await this.prisma.tipos_despesas.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, fluxocaixa];
  }

  async save(tipoDespesa: TipoDespesaDto) {
    return await this.prisma.tipos_despesas.create({
      data: tipoDespesa,
    });
  }
}
