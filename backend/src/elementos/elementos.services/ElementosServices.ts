import { ElementoDto } from "../elementos.dto/Elementos.dto";
import { IElementosRepository } from "../elementos.repository/InterfaceElementosRepository";

import { IElementosServices } from "./IElementoServices";

export class ElementosServices implements IElementosServices {
  private elementosRepository: IElementosRepository;

  constructor(elementosRepository: IElementosRepository) {
    this.elementosRepository = elementosRepository;
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
  async listarTodosPorUsuario(usuariosId: string) {
    return this.elementosRepository.findAllByUsuariosId(usuariosId);
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

    return this.elementosRepository.updateById(id, elemento);
  }

  async deletarUmPorId(id: string) {
    await this.validarExisteId(id, "exclusao");

    return this.elementosRepository.deleteById(id);
  }
}
