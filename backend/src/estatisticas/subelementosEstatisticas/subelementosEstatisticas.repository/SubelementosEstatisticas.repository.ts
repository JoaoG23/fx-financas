import { PrismaClient } from "@prisma/client";
import { buscarPrimeiroDiaDoMesSelecionado } from "../../../utils/datetime/buscarPrimeiroDiaDoMesSelecionado/buscarPrimeiroDiaDoMesSelecionado";
import { buscarUltimoDiaDoMesSelecionado } from "../../../utils/datetime/buscarUltimoDiaDoMesSelecionado/buscarUltimoDiaDoMesSelecionado";

export interface ISubelementosEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubelementosId(
    subelementosId: string,
    usuariosId: string,
    mes: number
  );
}

export class SubelementosEstatisticasRepository
  implements ISubelementosEstatisticasRepository
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubelementosId(
    subelementosId: string,
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
        subelementosId,
        usuariosId
      },
    });
  }
}
