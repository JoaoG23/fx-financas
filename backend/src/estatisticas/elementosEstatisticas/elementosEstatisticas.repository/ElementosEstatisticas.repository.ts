import { PrismaClient } from "@prisma/client";
import { buscarPrimeiroDiaMes } from "../../../utils/datetime/buscarPrimeiroDiaMes/buscarPrimeiroDiaMes";
import { buscarUltimoDiaMes } from "../../../utils/datetime/buscarUltimoDiaMes/buscarUltimoDiaMes";

export interface IElementosEstatisticasRepository {
  sumAllValorOfMonthLessThanZeroByUsuarioIdAndElementosId(
    elementosId: string,
    usuariosId: string
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
    usuariosId: string
  ) {
    // const { idelementosEstatisticas, descricao } = criterios;

    

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
        usuariosId,
        elementosId,
      },
    });
  }
}
