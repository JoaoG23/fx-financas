import { IElementosRepository } from "../../../elementos/elementos.repository/InterfaceElementosRepository";
import { ElementosRepository } from "../../../elementos/elementos.repository/elementos.repository";
import { converterParaFlutuantePorCasaDecimais } from "../../../utils/conversor-numeros/converterParaFlutuantePorCasaDecimais/converterParaFlutuantePorCasaDecimais";
import {
  ElementosEstatisticasRepository,
  IElementosEstatisticasRepository,
} from "../elementosEstatisticas.repository/ElementosEstatisticas.repository";

export class ElementosEstatisticasServices {
  constructor(
    private elementosEstatisticasRepository: IElementosEstatisticasRepository,
    private elementosRepository: IElementosRepository
  ) {}

  async despesasTotalPorElementoEUsuarioMes(usuariosId: string, mes: number) {
    const somaDespesasPorElementoId = [];
    const elementosDoUsuario =
      await this.elementosRepository.findAllByUsuariosId(usuariosId);

    for (const elemento of elementosDoUsuario) {
      const somaElemento =
        await this.elementosEstatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioIdAndElementosId(
          elemento.id,
          mes
        );

      const despesas = converterParaFlutuantePorCasaDecimais(
        somaElemento._sum.valor || 0
      );

      somaDespesasPorElementoId.push({
        elemento: elemento.descricao,
        despesas,
      });
    }

    return somaDespesasPorElementoId;
  }
}

const elementosEstatisticasRepository = new ElementosEstatisticasRepository();
const elementosRepository = new ElementosRepository();

export default new ElementosEstatisticasServices(
  elementosEstatisticasRepository,
  elementosRepository
);
