import { PrismaClient } from "@prisma/client";
import { buscarPrimeiroDiaMesAtual } from "../../../utils/datetime/buscarPrimeiroDiaMesAtual/buscarPrimeiroDiaMesAtual";
import { buscarUltimoDiaMesAtual } from "../../../utils/datetime/buscarUltimoDiaMesAtual/buscarUltimoDiaMesAtual";

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

    

    const firstDayOfMonth = buscarPrimeiroDiaMesAtual();
    const lastDayOfMonth = buscarUltimoDiaMesAtual();

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
