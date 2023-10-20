import { PrismaClient } from "@prisma/client";
import { buscarPrimeiroDiaDoMesSelecionado } from "../../../utils/datetime/buscarPrimeiroDiaDoMesSelecionado/buscarPrimeiroDiaDoMesSelecionado";
import { buscarUltimoDiaDoMesSelecionado } from "../../../utils/datetime/buscarUltimoDiaDoMesSelecionado/buscarUltimoDiaDoMesSelecionado";

export interface ISubelementosEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubelementosId(
    subelementosId: string,
    usuariosId: string,
    mes: number
  );
  sumBiggerThanZeroUsuariosIdAndSubelementoId(
    usuariosId: string,
    subelementosId: string
  );

  sumLessThanZeroUsuariosIdAndSubelementoId(
    usuariosId: string,
    subelementosId: string
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
        usuariosId,
      },
    });
  }

  async sumBiggerThanZeroUsuariosIdAndSubelementoId(
    usuariosId: string,
    subelementosId: string
  ) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          gt: 0,
        },
        subelementosId,
        usuariosId,
      },
    });
  }

  async sumLessThanZeroUsuariosIdAndSubelementoId(
    usuariosId: string,
    subelementosId: string
  ) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          lt: 0,
        },
        subelementosId,
        usuariosId,
      },
    });
  }
}
