import { ElementoDto } from "../../elementos/elementos.dto/Elementos.dto";

import { ElementosClassificacoesRepository } from "../estatisticasClassificacoes.repository/EstatisticasClassificacoes.repository";
import { ElementosClassificacoesRepositoryInterface } from "../estatisticasClassificacoes.repository/EstatisticasClassificacoes.repository.Interface";

export class ElementosClassificacoesServices {
  constructor(
    private estatisticasClassificacoesRepository: ElementosClassificacoesRepositoryInterface
  ) {}

  async buscarDespesasPorUsuarioEElementosEsteMes(
    usuariosId: string,
    elementosId: string
  ) {
    const elementos =
      await this.estatisticasClassificacoesRepository.findAllELementosByUsuariosId(
        usuariosId
      );
    // const despesasPorMes: DespesaReceitas[] = [];

    elementos.forEach((elemento: ElementoDto) => {
      // const despesasRecebida =
      //   await this.estatisticasClassificacoesRepository.sumAllValorMoreThanZeroByUsuariosIdAndThisMonthElementosId(
      //     usuariosId,
      //     elementosId
      //   );
      console.log("🚀 ~ file: EstatisticasClassificacoes.service.ts:28 ~ ElementosClassificacoesServices ~ elementos.forEach ~ elemento:", elemento)
    });
  }
}

export default new ElementosClassificacoesServices(
  new ElementosClassificacoesRepository()
);
