import { PrismaClient } from "@prisma/client";
import { buscarPrimeiroDiaMesAtual } from "../../../utils/datetime/buscarPrimeiroDiaMesAtual/buscarPrimeiroDiaMesAtual";
import { buscarUltimoDiaMesAtual } from "../../../utils/datetime/buscarUltimoDiaMesAtual/buscarUltimoDiaMesAtual";
import { buscarPrimeiroDiaDoMesSelecionado } from "../../../utils/datetime/buscarPrimeiroDiaDoMesSelecionado/buscarPrimeiroDiaDoMesSelecionado";
import { buscarUltimoDiaDoMesSelecionado } from "../../../utils/datetime/buscarUltimoDiaDoMesSelecionado/buscarUltimoDiaDoMesSelecionado";

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
    this.prisma = new PrismaClient();
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
