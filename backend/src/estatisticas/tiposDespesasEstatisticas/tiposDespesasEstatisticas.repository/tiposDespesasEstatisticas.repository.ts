import { PrismaClient } from "@prisma/client";

import { buscarPrimeiroDiaDoMesSelecionado } from "../../../utils/datetime/buscarPrimeiroDiaDoMesSelecionado/buscarPrimeiroDiaDoMesSelecionado";
import { buscarUltimoDiaDoMesSelecionado } from "../../../utils/datetime/buscarUltimoDiaDoMesSelecionado/buscarUltimoDiaDoMesSelecionado";

export interface ITiposDespesasEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioId(
    tipos_despesasId: string,
    usuariosId: string,
    mes: number
  );
}

export class TiposDespesasEstatisticasRepository
  implements ITiposDespesasEstatisticasRepository
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioId(
    tipos_despesasId: string,
    usuariosId: string,
    mes: number
  ) {
    const firstDayOfMonth = buscarPrimeiroDiaDoMesSelecionado(mes);
    const lastDayOfMonth = buscarUltimoDiaDoMesSelecionado(mes);

    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        data_insersao: {
          gte: firstDayOfMonth,
          lt: lastDayOfMonth,
        },
        valor: {
          lt: 0,
        },
        tipos_despesasId,
        usuariosId,
      },
    });
  }
}
