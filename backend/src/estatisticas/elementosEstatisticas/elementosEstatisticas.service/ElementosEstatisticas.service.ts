import { IElementosRepository } from "../../../elementos/elementos.repository/InterfaceElementosRepository";
import { ElementosRepository } from "../../../elementos/elementos.repository/elementos.repository";
import {
  ElementosEstatisticasRepository,
  IElementosEstatisticasRepository,
} from "../elementosEstatisticas.repository/ElementosEstatisticas.repository";

export class ElementosEstatisticasServices {
  constructor(
    private elementosEstatisticasRepository: IElementosEstatisticasRepository,
    private elementosRepository: IElementosRepository
  ) {}

  async despesasTotalPorElementoEUsuarioMes(
    usuariosId: string,
  ) {
    const somaDespesasPorElementoId = [];
    const elementosDoUsuario =
      await this.elementosRepository.findAllByUsuariosId(usuariosId);

    for (const elemento of elementosDoUsuario) {
      const somaElemento =
        await this.elementosEstatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioIdAndElementosId(
          elemento.id,
          usuariosId
        );

      const despesas = somaElemento._sum.valor;

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
