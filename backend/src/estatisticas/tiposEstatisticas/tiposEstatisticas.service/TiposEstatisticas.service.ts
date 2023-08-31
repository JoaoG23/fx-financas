import { TiposRepository } from "../../../tipos/tipos.repository/tipos.repository";
import {
  ITiposEstatisticasRepository,
  TiposEstatisticasRepository,
} from "../tiposEstatisticas.repository/TiposEstatisticas.repository";

export class TiposEstatisticasServices {
  constructor(
    private tiposEstatisticasRepository: ITiposEstatisticasRepository,
    private tiposRepository: TiposRepository
  ) {}

  async despesasTotalPorTipoEUsuarioMes(usuariosId: string, mes: number) {
    const somaDespesasPorElementoId = [];
    const tiposDoUsuario = await this.tiposRepository.findAllByUsuariosId(
      usuariosId
    );

    for (const tipo of tiposDoUsuario) {
      const somaElemento =
        await this.tiposEstatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioIdAndTiposId(
          tipo.id,
          usuariosId,
          mes
        );

      const despesas = somaElemento._sum.valor || "0";
      const limiteGasto = tipo.limiteGasto || "0";

      somaDespesasPorElementoId.push({
        tipo: tipo.descricao,
        despesas,
        limiteGasto,
      });
    }

    return somaDespesasPorElementoId;
  }
}

const tiposEstatisticasRepository = new TiposEstatisticasRepository();
const tiposRepository = new TiposRepository();

export default new TiposEstatisticasServices(
  tiposEstatisticasRepository,
  tiposRepository
);
