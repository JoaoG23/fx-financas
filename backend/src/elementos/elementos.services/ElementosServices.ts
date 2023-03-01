import { ElementoDto } from "../elementos.dto/Elementos.dto";
import { ElementoBuscasServices } from "./elementos.buscas.services/ElementoBuscasServices";
import { IElementosServices } from "./IElementoServices";

class ElementosServices
  extends ElementoBuscasServices
  implements IElementosServices
{
  async criar(data: ElementoDto) {
    const elementos = await this.prismaService.elementos.create({
      data,
    });
    return elementos;
  }

  async atualizarUmPorId(id: string, dadosNovos: ElementoDto) {
    const existeIdelementos = await this.buscarPorId(id);
    if (!existeIdelementos) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const elementos = await this.prismaService.elementos.update({
      where: { id },
      data: dadosNovos,
    });
    return elementos;
  }

  async deletarUmPorId(id: any) {
    const existeIdelementos = await this.buscarPorId(id);
    if (!existeIdelementos) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.elementos.delete({
      where: { id },
    });
  }
}

export default new ElementosServices();