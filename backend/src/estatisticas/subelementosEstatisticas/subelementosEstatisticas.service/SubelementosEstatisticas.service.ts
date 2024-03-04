import { SubelementosRepository } from "../../../subelementos/subelementos.repository/subelementos.repository";
import { converterNegativoParaAbsoluto } from "../../../utils/conversor-numeros/converterNegativoParaAbsoluto/converterNegativoParaAbsoluto";
import { converterParaFlutuantePorCasaDecimais } from "../../../utils/conversor-numeros/converterParaFlutuantePorCasaDecimais/converterParaFlutuantePorCasaDecimais";
import {
  ISubelementosEstatisticasRepository,
  SubelementosEstatisticasRepository,
} from "../subelementosEstatisticas.repository/SubelementosEstatisticas.repository";

export class SubelementosEstatisticasServices {
  constructor(
    private subelementosEstatisticasRepository: ISubelementosEstatisticasRepository,
    private subelementosRepository: SubelementosRepository
  ) {}

  async calcularSaldoAtualPorUsuarioESubelementosId(
    usuariosId: string,
    subelementosId: string
  ) {
    const receitas =
      await this.subelementosEstatisticasRepository.sumBiggerThanZeroUsuariosIdAndSubelementoId(
        usuariosId,
        subelementosId
      );
    const receitasTotal = receitas._sum.valor;

    const despesas =
      await this.subelementosEstatisticasRepository.sumLessThanZeroUsuariosIdAndSubelementoId(
        usuariosId,
        subelementosId
      );
    const despesasTotal = despesas._sum.valor;

    const despesasConvertida = converterNegativoParaAbsoluto(
      Number(despesasTotal)
    );

    const saldoAtual = Number(receitasTotal) - despesasConvertida;
    return saldoAtual;
  }

  async despesasTotalPorsubelementoEUsuarioMes(
    usuariosId: string,
    mes: number
  ) {
    const somaDespesasPorElementoId = [];
    const subelementosDoUsuario =
      await this.subelementosRepository.findAllByUsuariosId(usuariosId);

    for (const subelemento of subelementosDoUsuario) {
      const somaElemento =
        await this.subelementosEstatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubelementosId(
          subelemento.id,
          usuariosId,
          mes
        );

      const saldoAtual = await this.calcularSaldoAtualPorUsuarioESubelementosId(
        usuariosId,
        subelemento.id
      );

      const despesas = converterParaFlutuantePorCasaDecimais(
        somaElemento._sum.valor || 0
      );
      const limiteGasto = converterParaFlutuantePorCasaDecimais(
        saldoAtual || 0
      );

      somaDespesasPorElementoId.push({
        subelemento: subelemento.descricao,
        despesas,
        limiteGasto,
      });
    }

    return somaDespesasPorElementoId;
  }
}

const subelementosEstatisticasRepository =
  new SubelementosEstatisticasRepository();
const subelementosRepository = new SubelementosRepository();

export default new SubelementosEstatisticasServices(
  subelementosEstatisticasRepository,
  subelementosRepository
);
