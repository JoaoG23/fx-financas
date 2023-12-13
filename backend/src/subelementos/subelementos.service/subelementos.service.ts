import { SubelementoDto } from "../subelementos.dto/subelementos.dto";

import { SubelementosRepositoryInterface } from "../subelementos.repository/InterfaceSubelementosRepository";
import { SubelementosRepository } from "../subelementos.repository/subelementos.repository";

import { ISubelementosService } from "./ISubelementosService";

class SubelementosServices implements ISubelementosService {
  constructor(private subelementoRepository: SubelementosRepositoryInterface) {}

  async buscarPorId(id: string) {
    return await this.subelementoRepository.findById(id);
  }

  async listarTodosPorElementosId(elementosId: string) {
    return await this.subelementoRepository.findAllByElementosId(elementosId);
  }

  async listarTodosPorUsuariosId(usuariosId: string) {
    return this.subelementoRepository.findAllByUsuariosId(usuariosId);
  }

  async listarPorElementosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    elementosId: string
  ) {
    return this.subelementoRepository.findAllByPageAndElementosId(
      numeroPagina,
      quantidadeItemPagina,
      elementosId
    );
  }

  async criar(data: any) {
    return this.subelementoRepository.save(data);
  }

  async atualizarUmPorId(id: string, dadosNovos: SubelementoDto) {
    const existeIdsubelemento = await this.buscarPorId(id);
    if (!existeIdsubelemento) {
      throw new Error("Não existe esse ID para ser atualizado");
    }
    return this.subelementoRepository.updateById(id, dadosNovos);
  }

  async deletarUmPorId(id: any) {
    const existeIdsubelemento = await this.buscarPorId(id);
    if (!existeIdsubelemento) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.subelementoRepository.deleteById(id);
  }
}

const subelementoRepository = new SubelementosRepository();

export default new SubelementosServices(subelementoRepository);
