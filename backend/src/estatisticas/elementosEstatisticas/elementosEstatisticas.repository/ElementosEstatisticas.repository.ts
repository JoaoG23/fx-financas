import { PrismaClient } from "@prisma/client";
import { buscarPrimeiroDiaDoMesSelecionado } from "../../../utils/datetime/buscarPrimeiroDiaDoMesSelecionado/buscarPrimeiroDiaDoMesSelecionado";
import { buscarUltimoDiaDoMesSelecionado } from "../../../utils/datetime/buscarUltimoDiaDoMesSelecionado/buscarUltimoDiaDoMesSelecionado";
import { PrismaConexao } from "../../../configs/PrismaConexao";

export interface IElementosEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioIdAndElementosId(
    elementosId: string,
    mes: number
  );
}

export class ElementosEstatisticasRepository
  implements IElementosEstatisticasRepository
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = PrismaConexao.getInstancia();
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioIdAndElementosId(
    elementosId: string,
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
        elementosId,
      },
    });
  }
}
