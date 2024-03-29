import { ConflictError, NotFoundError } from "rest-api-errors";
import { PrismaClient } from "@prisma/client";

import { LocaisDto } from "../locais.dto/locais.dto";

import { Paginacao } from "../../utils/Paginacao";

import { LocaisServiceInterface } from "./LocaisServiceInterface";

import { LocaisRepositoryInteface } from "../locais.repository/InterfaceLocaisRepository";
import { validarSeCamposCorretos } from "../locais.dto/validador.dto";

export class LocaisServices implements LocaisServiceInterface {
  private locaisRepository: LocaisRepositoryInteface;

  constructor(locaisRepository: LocaisRepositoryInteface) {
    this.locaisRepository = locaisRepository;
  }

  validarTodosCampos(local: LocaisDto) {
    const { error } = validarSeCamposCorretos(local);
    if (error) {
      throw new ConflictError(null, error.message);
    }
  }

  async validarNaoExisteId(id: string) {
    const existeIdLocal = await this.locaisRepository.findById(id);
    if (!existeIdLocal) {
      throw new NotFoundError("", "Não existe esse Id para operação");
    }
  }

  async listaUmPorId(id: string) {
    const local = await this.locaisRepository.findById(id);
    return local;
  }

  async listarTodosPorUsuariosId(usuariosId:string) {
    return await this.locaisRepository.findAllByUsuariosId(usuariosId);
  }

  async listarTodosPorPaginaUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    return await this.locaisRepository.findAllByPageAndUsuariosId(
      numeroPagina,
      quantidadeItemPagina,
      usuariosId
    );
  }

  async criarUm(local: LocaisDto) {
    await this.validarTodosCampos(local);

    return this.locaisRepository.save(local);
  }

  async atualizarUmPorId(id: string, local: LocaisDto) {
    await this.validarNaoExisteId(id);

    return await this.locaisRepository.updateById(id, local);
  }

  async deletarUmPorId(id: string) {
    await this.validarNaoExisteId(id);

    return await this.locaisRepository.deleteById(id);
  }
}
