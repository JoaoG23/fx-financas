import { converterNegativoParaAbsoluto } from "../../utils/conversor-numeros/converterNegativoParaAbsoluto/converterNegativoParaAbsoluto";
import { converterParaNumero } from "../../utils/conversor-numeros/converterParaNumero/converterParaNumero";
import { EstatisticaRepositoryInterface } from "../estatisticas.repository/EstatisticaRepositoryInterface";
import { EstatisticaRepository } from "../estatisticas.repository/estatisticas.repository";

import { DespesaReceitas } from "../types/DespesasReceitas";
import { meses } from "./meses";

type DespesaReceitaSaldoAtual = {
  despesa?: string;
  receita?: string;
  saldoAtual?: number;
};
export class EstatisticasService {
  private estatisticasRepository: EstatisticaRepositoryInterface;

  constructor(estatisticasRepository: EstatisticaRepositoryInterface) {
    this.estatisticasRepository = estatisticasRepository;
  }

  public async obterDetalhesFinanceirosMesPorUsuario(
    usuariosId: string
  ): Promise<DespesaReceitaSaldoAtual> {
    const despesa =
      await this.estatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioId(
        usuariosId
      );

    const receita =
      await this.estatisticasRepository.sumAllValorOfMonthMoreThanZeroByUsuarioId(
        usuariosId
      );

    const saldoAtual = await this.buscarSaldoAtualPorUsuario(usuariosId);

    return {
      despesa: despesa._sum.valor,
      receita: receita._sum.valor,
      saldoAtual: saldoAtual,
    };
  }

  async buscarGastosTotalMesPorUsuario(usuariosId: string) {
    const sum =
      await this.estatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioId(
        usuariosId
      );

    const despesasTotalMesUsuario = sum._sum.valor;
    return despesasTotalMesUsuario;
  }

  async buscarGanhosTotalMesPorUsuario(usuariosId: string) {
    const sum =
      await this.estatisticasRepository.sumAllValorOfMonthMoreThanZeroByUsuarioId(
        usuariosId
      );

    const receitasTotalMesUsuario = sum._sum.valor;
    return receitasTotalMesUsuario;
  }

  async buscarSaldoAtualPorUsuario(usuariosId: string) {
    const receitas = await this.estatisticasRepository.sumBiggerThanZero(
      usuariosId
    );
    const receitasTotal = receitas._sum.valor;

    const despesas = await this.estatisticasRepository.sumLessThanZero(
      usuariosId
    );
    const despesasTotal = despesas._sum.valor;

    const despesasConvertida = converterNegativoParaAbsoluto(
      Number(despesasTotal)
    );

    const saldoAtual = Number(receitasTotal) - despesasConvertida;
    return saldoAtual;
  }

  async buscarDespesasReceitas12MesesAnoPorUsuario(
    usuariosId: string,
    ano: number
  ) {
    const despesasPorMes: DespesaReceitas[] = [];

    for (let mes = 0; mes < 12; mes++) {
      const despesasRecebida =
        await this.estatisticasRepository.sumAllValorLessThanZeroByUsuariosIdAndMonthAndYears(
          mes,
          usuariosId,
          ano
        );

      const receitaRecebida =
        await this.estatisticasRepository.sumAllValorMoreThanZeroByUsuariosIdAndMonthAndYears(
          mes,
          usuariosId,
          ano
        );

      despesasPorMes.push({
        mes: meses[mes],
        receita: converterParaNumero(receitaRecebida._sum.valor),
        despesa: converterParaNumero(despesasRecebida._sum.valor),
      });
    }
    return despesasPorMes;
  }
}

export default new EstatisticasService(new EstatisticaRepository());
