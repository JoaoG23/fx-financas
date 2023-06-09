import { PrismaClient } from "@prisma/client";
import { EstatisticaRepositoryInterface } from "./EstatisticaRepositoryInterface";
import { buscarUltimoDiaMes } from "../../utils/datetime/buscarUltimoDiaMes/buscarUltimoDiaMes";
import { buscarPrimeiroDiaMes } from "../../utils/datetime/buscarPrimeiroDiaMes/buscarPrimeiroDiaMes";

export class EstatisticaRepository implements EstatisticaRepositoryInterface {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async sumAllValorLessThanZeroByUsuariosIdAndMonthAndYears(
    numberOfMonth: number,
    usuariosId: string,
    years: number
  ) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = numberOfMonth + 1;

    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        data_insersao: {
          gte: new Date(years || currentYear, currentMonth - 1, 1),
          lt: new Date(years || currentYear, currentMonth, 1),
        },
        valor: {
          lt: 0,
        },
        usuariosId,
      },
    });
  }

  async sumAllValorOfMonthMoreThanZeroByUsuarioId(usuariosId: string) {
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
          gt: 0,
        },
        usuariosId,
      },
    });
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioId(usuariosId: string) {
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
      },
    });
  }

  async findLastSaldoByUsuariosId(usuariosId: string) {
    return await this.prisma.fluxocaixa.findFirst({
      where: { usuariosId },
      orderBy: {
        orderador: "desc",
      },
    });
  }
}
