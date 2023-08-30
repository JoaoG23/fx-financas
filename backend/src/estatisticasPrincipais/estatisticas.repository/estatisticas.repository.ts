import { PrismaClient } from "@prisma/client";
import { EstatisticaRepositoryInterface } from "./EstatisticaRepositoryInterface";
import { buscarPrimeiroDiaMesAtual } from "../../utils/datetime/buscarPrimeiroDiaMesAtual/buscarPrimeiroDiaMesAtual";
import { buscarUltimoDiaMesAtual } from "../../utils/datetime/buscarUltimoDiaMesAtual/buscarUltimoDiaMesAtual";

export class EstatisticaRepository implements EstatisticaRepositoryInterface {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }


  async sumBiggerThanZero(usuariosId: string) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          gt: 0,
        },
        usuariosId,
      },
    });
  }

  async sumLessThanZero(usuariosId: string) {
    return await this.prisma.fluxocaixa.aggregate({
      _sum: {
        valor: true,
      },
      where: {
        valor: {
          lt: 0,
        },
        usuariosId,
      },
    });
  }

  async sumAllValorMoreThanZeroByUsuariosIdAndMonthAndYears(
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
          gt: 0,
        },
        usuariosId,
      },
    });
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
          gt: 0,
        },
        usuariosId,
      },
    });
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioId(usuariosId: string) {
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
