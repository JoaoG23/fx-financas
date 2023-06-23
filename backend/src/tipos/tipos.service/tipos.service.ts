import { TiposDto } from "../tipos.dto/tipos.dto";
import { TiposBuscasServices } from "./tipos.buscas.service/tipos.buscas.service";

class TiposServices extends TiposBuscasServices  {
  async criar(data: TiposDto) {
    const tipos = await this.prismaService.tipos.create({
      data,
    });
    return tipos;
  }

  async atualizarUmPorId(id: string, dadosNovos: TiposDto) {
    const existeIdtipos = await this.buscarPorId(id);
    if (!existeIdtipos) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const tipos = await this.prismaService.tipos.update({
      where: { id },
      data: dadosNovos,
    });
    return tipos;
  }

  async deletarUmPorId(id: any) {
    const existeIdtipos = await this.buscarPorId(id);
    if (!existeIdtipos) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.tipos.delete({
      where: { id },
    });
  }
}

export default new TiposServices();
