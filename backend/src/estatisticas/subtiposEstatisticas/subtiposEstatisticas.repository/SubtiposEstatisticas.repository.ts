import { PrismaClient } from "@prisma/client";
import { PrismaConexao } from "../../../configs/PrismaConexao";

import { buscarPrimeiroDiaDoMesSelecionado } from "../../../utils/datetime/buscarPrimeiroDiaDoMesSelecionado/buscarPrimeiroDiaDoMesSelecionado";
import { buscarUltimoDiaDoMesSelecionado } from "../../../utils/datetime/buscarUltimoDiaDoMesSelecionado/buscarUltimoDiaDoMesSelecionado";

export interface ISubtiposEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubtiposId(
    subtiposId: string,
    usuariosId: string,
    mes: number
  );
  sumBiggerThanZeroUsuariosIdAndSubtiposId(
    usuariosId: string,
    subtiposId: string
  );
  sumLessThanZeroUsuariosIdAndSubtiposId(
    usuariosId: string,
    subtiposId: string
  );
}

export class SubtiposEstatisticasRepository
  implements ISubtiposEstatisticasRepository
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = PrismaConexao.getInstancia();
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioIdAndSubtiposId(
    subtiposId: string,
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
        subtiposId,
        usuariosId,
      },
    });
  }

  async sumBiggerThanZeroUsuariosIdAndSubtiposId(
    usuariosId: string,
    subtiposId: string
  ) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          gt: 0,
        },
        subtiposId,
        usuariosId,
      },
    });
  }

  async sumLessThanZeroUsuariosIdAndSubtiposId(
    usuariosId: string,
    subtiposId: string
  ) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          lt: 0,
        },
        subtiposId,
        usuariosId,
      },
    });
  }
}
