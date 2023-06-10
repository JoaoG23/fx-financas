import { EstatisticaRepositoryInterface } from "../estatisticas.repository/EstatisticaRepositoryInterface";
import { EstatisticaRepository } from "../estatisticas.repository/estatisticas.repository";

import { Despesa } from "../types/Despesa";
import { Receita } from "../types/Receita";

export class EstatisticasService {
  private estatisticasRepository: EstatisticaRepositoryInterface;

  constructor(estatisticasRepository: EstatisticaRepositoryInterface) {
    this.estatisticasRepository = estatisticasRepository;
  }

  async buscarGastosTotalMesPorUsuario(usuariosId: string) {
    const sum =
      await this.estatisticasRepository.sumAllValorOfMonthLessThanZeroByUsuarioId(
        usuariosId
      );

    const totalGastosMesUsuario = sum._sum.valor;
    return { totalGastosMesUsuario };
  }

  async buscarGanhosTotalMesPorUsuario(usuariosId: string) {
    const sum =
      await this.estatisticasRepository.sumAllValorOfMonthMoreThanZeroByUsuarioId(
        usuariosId
      );

    const ganhosTotalMesUsuario = sum._sum.valor;
    return { ganhosTotalMesUsuario };
  }

  async buscarSaldoAtualPorUsuario(usuariosId: string) {
    const itemFluxoCaixa =
      await this.estatisticasRepository.findLastSaldoByUsuariosId(usuariosId);

    return { saldoAtual: itemFluxoCaixa.saldo };
  }

  async buscarDespesas12MesesAnoPorUsuario(usuariosId: string, ano: number) {
    const despesasPorMes: Despesa[] = [];
    for (let mes = 0; mes < 12; mes++) {
      const {
        _sum: { valor },
      } = await this.estatisticasRepository.sumAllValorLessThanZeroByUsuariosIdAndMonthAndYears(
        mes,
        usuariosId,
        ano
      );

      const mesCorrigido = mes + 1;
      despesasPorMes.push({ mes: mesCorrigido, despesaValor: valor });
    }
    return despesasPorMes;
  }

  async buscarReceitas12MesesAnoPorUsuario(usuariosId: string, ano: number) {
    const receitasPorMes: Receita[] = [];
    for (let mes = 0; mes < 12; mes++) {
      const {
        _sum: { valor },
      } = await this.estatisticasRepository.sumAllValorMoreThanZeroByUsuariosIdAndMonthAndYears(
        mes,
        usuariosId,
        ano
      );

      const mesCorrigido = mes + 1;
      receitasPorMes.push({ mes: mesCorrigido, receitaValor: valor });
    }
    return receitasPorMes;
  }
}

export default new EstatisticasService(new EstatisticaRepository());
