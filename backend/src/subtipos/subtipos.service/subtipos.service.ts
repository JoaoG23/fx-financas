import { SubtiposDto } from "../subtipos.dto/subtipos.dto";

import { SubtiposRepositoryInterface } from "../subtipos.repository/InterfaceSubtiposRepository";

import { SubtiposRepository } from "../subtipos.repository/subtipos.repository";

class SubtiposServices {
  constructor(private subtiposRepository: SubtiposRepositoryInterface) {}

  async listaUmPorId(id: string) {
    return await this.subtiposRepository.findById(id);
  }

  async listaPorTodosUsuariosId(usuariosId: string) {
    return await this.subtiposRepository.findAllByUsuariosId(usuariosId);
  }

  async listaPorTodosTiposId(tiposId: string) {
    return await this.subtiposRepository.findAllByTiposId(tiposId);
  }

  async listarPorTiposPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    tiposId: string
  ) {
    return await this.subtiposRepository.findAllByPageAndTiposId(
      numeroPagina,
      quantidadeItemPagina,
      tiposId
    );
  }

  async criar(data: SubtiposDto) {
    return await this.subtiposRepository.save(data);
  }

  async atualizarUmPorId(id: string, dadosNovos: SubtiposDto) {
    const existeIdsubtipos = await this.listaUmPorId(id);
    if (!existeIdsubtipos) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    return await this.subtiposRepository.updateById(id, dadosNovos);
  }

  async deletarUmPorId(id: any) {
    const existeIdsubtipos = await this.listaUmPorId(id);
    if (!existeIdsubtipos) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return await this.subtiposRepository.deleteById(id);
  }
}

const subtiposRepository = new SubtiposRepository();

export default new SubtiposServices(subtiposRepository);
