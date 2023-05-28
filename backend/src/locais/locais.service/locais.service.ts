import { PrismaClient } from "@prisma/client";
import { LocaisDto } from "../locais.dto/locais.dto";
import { Paginacao } from "../../utils/Paginacao";
import { LocaisServiceInterface } from "./LocaisServiceInterface";
import { LocaisRepositoryInteface } from "../locais.repository/InterfaceLocaisRepository";
import { NotFoundError } from "rest-api-errors";

export class LocaisServices implements LocaisServiceInterface {
  private prismaService: PrismaClient;
  private paginacaoService: Paginacao;
  private locaisRepository: LocaisRepositoryInteface;

  constructor(locaisRepository: LocaisRepositoryInteface) {
    this.prismaService = new PrismaClient();
    this.paginacaoService = new Paginacao();
    this.locaisRepository = locaisRepository;
  }

  listaUmPorId(id: string) {
    throw new Error("Method not implemented.");
  }

  async criarUm(local: LocaisDto) {
    return this.locaisRepository.save(local);
  }

  async validarNaoExisteId(id: string) {
    const existeIdLocal = await this.locaisRepository.findById(id);
    if (!existeIdLocal) {
      throw new NotFoundError("","Não existe esse Id para operação");
    }
  }

  async buscarPorId(id: string) {
    const locais = await this.prismaService.locais.findFirst({
      where: { id },
    });
    return locais;
  }

  async listarTodos() {
    const locais = await this.prismaService.locais.findMany({});
    return locais;
  }
  async listaPorId(id: string) {
    const locais = await this.prismaService.locais.findUnique({
      where: { id },
    });
    return locais;
  }

  async contarTotalRegistros() {
    const contagem = await this.prismaService.locais.count();
    return contagem;
  }

  async listarTodosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number
  ) {
    const quantidadeTotalRegistros = await this.contarTotalRegistros();
    const itemsPorPagina = Number(quantidadeItemPagina);

    const totalQuantidadePaginas =
      await this.paginacaoService.retornaQuantidadePaginas(
        quantidadeTotalRegistros,
        itemsPorPagina
      );

    const pularPagina = (numeroPagina - 1) * itemsPorPagina;
    const locais = await this.prismaService.locais.findMany({
      skip: pularPagina,
      take: itemsPorPagina,
    });

    return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, locais];
  }

  async atualizarUmPorId(id: string, local: LocaisDto) {
    await this.validarNaoExisteId(id);

    return await this.locaisRepository.updateById(id, local);
  }

  async deletarUmPorId(id: any) {
    const existeIdlocais = await this.buscarPorId(id);
    if (!existeIdlocais) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.locais.delete({
      where: { id },
    });
  }
}
