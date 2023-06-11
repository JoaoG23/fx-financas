import { PrismaClient } from "@prisma/client";

import { ElementosClassificacoesRepositoryInterface } from "./EstatisticasClassificacoes.repository.Interface";

import { buscarPrimeiroDiaMes } from "../../utils/datetime/buscarPrimeiroDiaMes/buscarPrimeiroDiaMes";
import { buscarUltimoDiaMes } from "../../utils/datetime/buscarUltimoDiaMes/buscarUltimoDiaMes";

export class ElementosClassificacoesRepository
  implements ElementosClassificacoesRepositoryInterface
{
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async findAllELementosByUsuariosId(usuariosId: string) {
    return await this.prisma.fluxocaixa.findMany({
      where: { usuariosId },
    });
  }

  async sumAllValorMoreThanZeroByUsuariosIdAndThisMonthElementosId(
    usuariosId: string,
    elementosId: string
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
        usuariosId,
        elementosId,
      },
    });
  }
}
