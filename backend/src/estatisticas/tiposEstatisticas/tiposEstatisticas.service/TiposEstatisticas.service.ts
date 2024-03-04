import { TiposRepository } from "../../../tipos/tipos.repository/tipos.repository";
import { converterNegativoParaAbsoluto } from "../../../utils/conversor-numeros/converterNegativoParaAbsoluto/converterNegativoParaAbsoluto";
import { converterParaFlutuantePorCasaDecimais } from "../../../utils/conversor-numeros/converterParaFlutuantePorCasaDecimais/converterParaFlutuantePorCasaDecimais";
import {
  ITiposEstatisticasRepository,
  TiposEstatisticasRepository,
} from "../tiposEstatisticas.repository/TiposEstatisticas.repository";

export class TiposEstatisticasServices {
  constructor(
    private tiposEstatisticasRepository: ITiposEstatisticasRepository,
    private tiposRepository: TiposRepository
  ) {}

  async calcularSaldoAtualPorUsuarioETipo(usuariosId: string, tiposId: string) {
    const receitas =
      await this.tiposEstatisticasRepository.sumBiggerThanZeroUsuariosIdAndTiposId(
        usuariosId,
        tiposId
      );
    const receitasTotal = receitas._sum.valor;

    const despesas =
      await this.tiposEstatisticasRepository.sumLessThanZeroUsuariosIdAndTiposId(
        usuariosId,
        tiposId
      );
    const despesasTotal = despesas._sum.valor;

    const despesasConvertida = converterNegativoParaAbsoluto(
      Number(despesasTotal)
    );

    const saldoAtual = Number(receitasTotal) - despesasConvertida;
    return saldoAtual;
  }

  async despesasTotalPorTipoEUsuarioMes(usuariosId: string, mes: number) {
    const somaDespesasPorTipoId = [];
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

      const saldoAtual = await this.calcularSaldoAtualPorUsuarioETipo(
        usuariosId,
        tipo.id
      );
      const despesas =
        converterParaFlutuantePorCasaDecimais(somaElemento._sum.valor || 0) ;
      const limiteGasto =
        converterParaFlutuantePorCasaDecimais(saldoAtual || 0)

      somaDespesasPorTipoId.push({
        tipo: tipo.descricao,
        despesas,
        limiteGasto,
      });
    }

    return somaDespesasPorTipoId;
  }
}

const tiposEstatisticasRepository = new TiposEstatisticasRepository();
const tiposRepository = new TiposRepository();

export default new TiposEstatisticasServices(
  tiposEstatisticasRepository,
  tiposRepository
);
