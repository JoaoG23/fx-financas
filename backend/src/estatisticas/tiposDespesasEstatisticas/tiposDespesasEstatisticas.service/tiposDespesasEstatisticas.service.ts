import { TiposDespesasRepository } from "../../../tiposDespesas/tiposDespesas.repository/tiposDespesas.repository";
import {
  ITiposDespesasEstatisticasRepository,
  TiposDespesasEstatisticasRepository,
} from "../tiposDespesasEstatisticas.repository/tiposDespesasEstatisticas.repository";

export class TiposDespesasEstatisticasServices {
  constructor(
    private tiposDespesasEstatisticasRepository: ITiposDespesasEstatisticasRepository,
    private tiposDespesasRepository: TiposDespesasRepository
  ) {}

  async despesasTotalPorTipoEUsuarioMes(usuariosId: string, mes: number) {
    const somaDespesasPorElementoId = [];
    const tiposDespesas = await this.tiposDespesasRepository.findAll();

    for (const tipo of tiposDespesas) {
      const somaElemento =
        await this.tiposDespesasEstatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioId(
          tipo.id,
          usuariosId,
          mes
        );

      const despesas = somaElemento._sum.valor || "0";

      somaDespesasPorElementoId.push({
        tipo: tipo.descricao,
        despesas,
      });
    }

    return somaDespesasPorElementoId;
  }
}

const tiposDespesasEstatisticasRepository =
  new TiposDespesasEstatisticasRepository();
const tiposDespesasRepository = new TiposDespesasRepository();

export default new TiposDespesasEstatisticasServices(
  tiposDespesasEstatisticasRepository,
  tiposDespesasRepository
);
