import { PrismaClient } from "@prisma/client";
import { buscarPrimeiroDiaMes } from "../../../utils/datetime/buscarPrimeiroDiaMes/buscarPrimeiroDiaMes";
import { buscarUltimoDiaMes } from "../../../utils/datetime/buscarUltimoDiaMes/buscarUltimoDiaMes";

export interface ITiposEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioIdAndTiposId(
    tiposId: string,
    usuariosId: string
  );
}

export class TiposEstatisticasRepository
  implements ITiposEstatisticasRepository
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioIdAndTiposId(
    tiposId: string,
    usuariosId: string
  ) {

    const firstDayOfMonth = buscarPrimeiroDiaMes();
    const lastDayOfMonth = buscarUltimoDiaMes();

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
        usuariosId
      },
    });
  }
}
