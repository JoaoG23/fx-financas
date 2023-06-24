import { SubtiposDto } from "../subtipos.dto/subtipos.dto";
import { SubtiposBuscasServices } from './subtipos.buscas.service/subtipos.buscas.service'

  

class SubtiposServices
  extends SubtiposBuscasServices
  implements SubtiposServices
{
  async criar(data: SubtiposDto) {
    const subtipos = await this.prismaService.subtipos.create({
      data,
    });
    return subtipos;
  }

  async atualizarUmPorId(id: string, dadosNovos: SubtiposDto) {
    const existeIdsubtipos = await this.listaUmPorId(id);
    if (!existeIdsubtipos) {
      throw new Error("Não existe esse ID para ser atualizado");
    }

    const subtipos = await this.prismaService.subtipos.update({
      where: { id },
      data: dadosNovos,
    });
    return subtipos;
  }

  async deletarUmPorId(id: any) {
    const existeIdsubtipos = await this.listaUmPorId(id);
    if (!existeIdsubtipos) {
      throw new Error("Não há esse Id para ser excluido");
    }
    return this.prismaService.subtipos.delete({
      where: { id },
    });
  }
}

export default new SubtiposServices();
  
  
  
  
  
  
  
  
  