import { ElementoDto } from "../elementos.dto/Elementos.dto";
import { ElementosRepository } from "../elementos.repository/elementos.repository";
import { IElementosRepository } from "../elementos.repository/InterfaceElementosRepository";

import { IElementosServices } from "./IElementoServices";

export class ElementosServices implements IElementosServices {
  private elementosRepository: IElementosRepository;

  constructor() {
    this.elementosRepository = new ElementosRepository();
  }

  async buscarPorId(id: string) {
    return this.elementosRepository.findById(id);
  }

  async validarExisteId(id: string, operacao: string) {
    const existeIdelementos = await this.elementosRepository.findById(id);
    if (!existeIdelementos) {
      throw new Error("Não existe esse ID para realizar operação " + operacao);
    }
  }

  async listarTodos() {
    return this.elementosRepository.findAll();
  }

  async listarPorUsuarioPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  ) {
    return this.elementosRepository.findAllByPageAndUsuariosId(
      numeroPagina,
      quantidadeItemPagina,
      usuariosId
    );
  }

  async criar(elemento: ElementoDto) {
    return this.elementosRepository.save(elemento);
  }

  async atualizarUmPorId(id: string, elemento: ElementoDto) {
    await this.validarExisteId(id, "atualização");

    return this.elementosRepository.update(id, elemento);
  }

  async deletarUmPorId(id: string) {
    await this.validarExisteId(id, "exclusao");

    return this.elementosRepository.delete(id);
  }
}

