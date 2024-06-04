import { PrismaClient } from "@prisma/client";
import { PrismaConexao } from "../../../configs/PrismaConexao";

import { buscarPrimeiroDiaDoMesSelecionado } from "../../../utils/datetime/buscarPrimeiroDiaDoMesSelecionado/buscarPrimeiroDiaDoMesSelecionado";
import { buscarUltimoDiaDoMesSelecionado } from "../../../utils/datetime/buscarUltimoDiaDoMesSelecionado/buscarUltimoDiaDoMesSelecionado";

export interface ITiposEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioIdAndTiposId(
    tiposId: string,
    usuariosId: string,
    mes: number
  );
  sumBiggerThanZeroUsuariosIdAndTiposId(usuariosId: string, tiposId: string);
  sumLessThanZeroUsuariosIdAndTiposId(usuariosId: string, tiposId: string);
}

export class TiposEstatisticasRepository
  implements ITiposEstatisticasRepository
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = PrismaConexao.getInstancia();
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioIdAndTiposId(
    tiposId: string,
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
        tiposId,
        usuariosId,
      },
    });
  }

  async sumBiggerThanZeroUsuariosIdAndTiposId(
    usuariosId: string,
    tiposId: string
  ) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          gt: 0,
        },
        tiposId,
        usuariosId,
      },
    });
  }

  async sumLessThanZeroUsuariosIdAndTiposId(
    usuariosId: string,
    tiposId: string
  ) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          lt: 0,
        },
        tiposId,
        usuariosId,
      },
    });
  }
}
