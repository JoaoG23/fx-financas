import { SubelementosRepository } from "../../../subelementos/subelementos.repository/subelementos.repository";
import { ISubelementosEstatisticasRepository, SubelementosEstatisticasRepository } from "../subelementosEstatisticas.repository/SubelementosEstatisticas.repository";

export class SubelementosEstatisticasServices {
  constructor(
    private subelementosEstatisticasRepository: ISubelementosEstatisticasRepository,
    private subelementosRepository: SubelementosRepository
  ) {}

  async despesasTotalPorsubelementoEUsuarioMes(usuariosId: string, mes: number) {
    const somaDespesasPorElementoId = [];
    const subelementosDoUsuario = await this.subelementosRepository.findAllByUsuariosId(
      usuariosId
    );

    for (const subelemento of subelementosDoUsuario) {
      const somaElemento =
        await this.subelementosEstatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubelementosId(
          subelemento.id,
          usuariosId,
          mes
        );

      const despesas = somaElemento._sum.valor || "0";
      const limiteGasto = subelemento.limiteGasto || "0";

      somaDespesasPorElementoId.push({
        subelemento: subelemento.descricao,
        despesas,
        limiteGasto,
      });
    }

    return somaDespesasPorElementoId;
  }
}

const subelementosEstatisticasRepository = new SubelementosEstatisticasRepository();
const subelementosRepository = new SubelementosRepository();

export default new SubelementosEstatisticasServices(
  subelementosEstatisticasRepository,
  subelementosRepository
);
