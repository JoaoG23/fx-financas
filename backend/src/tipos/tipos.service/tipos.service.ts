import { TiposDto } from "../tipos.dto/tipos.dto";
import { TiposRepositoryInterface } from "../tipos.repository/InterfaceTiposRepository";

export class TiposServices {
  private tiposRepository: TiposRepositoryInterface;

  constructor(tiposRepository: TiposRepositoryInterface) {
    this.tiposRepository = tiposRepository;
  }

  async listarPorSubelementosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    subelementosId: string
  ) {
    return await this.tiposRepository.findAllByPageAndSubelementosId(
      numeroPagina,
      quantidadeItemPagina,
      subelementosId
    );
  }

  async buscarPorId(id: string) {
    return await this.tiposRepository.findById(id);
  }

  async listarTodosPorUsuariosId(usuariosId: string) {
    return await this.tiposRepository.findAllByUsuariosId(usuariosId);
  }
  async listarTodosPorSubelementosId(subelementosId: string) {
    return await this.tiposRepository.findAllBySubelementosId(subelementosId);
  }

  async criar(tipo: TiposDto) {
    return await this.tiposRepository.save(tipo);
  }

  async atualizarUmPorId(id: string, tipo: TiposDto) {
    const existeIdtipos = await this.buscarPorId(id);
    if (!existeIdtipos) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    return await this.tiposRepository.updateById(id, tipo);
  }

  async deletarUmPorId(id: string) {
    const existeIdtipos = await this.buscarPorId(id);
    if (!existeIdtipos) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return await this.tiposRepository.deleteById(id);
  }
}


