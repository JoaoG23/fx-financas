import { SubtiposRepository } from "../../../subtipos/subtipos.repository/subtipos.repository";

import { converterNegativoParaAbsoluto } from "../../../utils/conversor-numeros/converterNegativoParaAbsoluto/converterNegativoParaAbsoluto";

import {
  ISubtiposEstatisticasRepository,
  SubtiposEstatisticasRepository,
} from "../subtiposEstatisticas.repository/SubtiposEstatisticas.repository";

export class SubtiposEstatisticasServices {
  constructor(
    private subtiposEstatisticasRepository: ISubtiposEstatisticasRepository,
    private subtiposRepository: SubtiposRepository
  ) {}

  async calcularSaldoAtualPorUsuarioESubtipo(
    usuariosId: string,
    subtiposId: string
  ) {
    const receitas =
      await this.subtiposEstatisticasRepository.sumBiggerThanZeroUsuariosIdAndSubtiposId(
        usuariosId,
        subtiposId
      );
    const receitasTotal = receitas._sum.valor;

    const despesas =
      await this.subtiposEstatisticasRepository.sumLessThanZeroUsuariosIdAndSubtiposId(
        usuariosId,
        subtiposId
      );
    const despesasTotal = despesas._sum.valor;

    const despesasConvertida = converterNegativoParaAbsoluto(
      Number(despesasTotal)
    );

    const saldoAtual = Number(receitasTotal) - despesasConvertida;
    return saldoAtual;
  }

  async despesasTotalPorSubtipoEUsuarioMes(usuariosId: string, mes: number) {
    const somaDespesasPorSubtipoId  = [];
    const subtiposDoUsuario = await this.subtiposRepository.findAllByUsuariosId(
      usuariosId
    );

    for (const subtipo of subtiposDoUsuario) {
      const somaElemento =
        await this.subtiposEstatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubtiposId(
          subtipo.id,
          usuariosId,
          mes
        );

      const saldoAtual = await this.calcularSaldoAtualPorUsuarioESubtipo(
        usuariosId,
        subtipo.id
      );
      const despesas = somaElemento._sum.valor || "0";
      const limiteGasto = saldoAtual || "0";

      somaDespesasPorSubtipoId.push({
        subtipo: subtipo.descricao,
        despesas,
        limiteGasto,
      });
    }

    return somaDespesasPorSubtipoId;
  }
}

const subtiposEstatisticasRepository = new SubtiposEstatisticasRepository();
const subtiposRepository = new SubtiposRepository();

export default new SubtiposEstatisticasServices(
  subtiposEstatisticasRepository,
  subtiposRepository
);
