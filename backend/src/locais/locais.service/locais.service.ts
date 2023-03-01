import { LocaisDto } from "../locais.dto/locais.dto";
import { LocaisBuscasServices } from "./locais.buscas.service/locais.buscas.service";

class LocaisServices extends LocaisBuscasServices {
  async criar(data: LocaisDto) {
    const locais = await this.prismaService.locais.create({
      data,
    });
    return locais;
  }

  async atualizarUmPorId(id: string, dadosNovos: LocaisDto) {
    const existeIdlocais = await this.buscarPorId(id);
    if (!existeIdlocais) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const locais = await this.prismaService.locais.update({
      where: { id },
      data: dadosNovos,
    });
    return locais;
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

export default new LocaisServices();
