import { SubelementoDto } from "../subelementos.dto/subelementos.dto";
import { SubelementoBuscasServices } from "./subelementos.buscas.service/subelementos.buscas.service";
import { ISubelementosService } from "./ISubelementosService";

class SubelementosServices
  extends SubelementoBuscasServices
  implements ISubelementosService
{
  async criar(data: any) {
    const subelemento = await this.prismaService.subelementos.create({
      data,
    });
    return subelemento;
  }

  async atualizarUmPorId(id: string, dadosNovos: SubelementoDto) {
    const existeIdsubelemento = await this.buscarPorId(id);
    if (!existeIdsubelemento) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const subelemento = await this.prismaService.subelementos.update({
      where: { id },
      data: dadosNovos,
    });
    return subelemento;
  }

  async deletarUmPorId(id: any) {
    const existeIdsubelemento = await this.buscarPorId(id);
    if (!existeIdsubelemento) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.subelementos.delete({
      where: { id },
    });
  }
}

export default new SubelementosServices();
