import { PrismaClient } from "@prisma/client";
import { EstatisticaRepositoryInterface } from "./EstatisticaRepositoryInterface";

export class EstatisticaRepository implements EstatisticaRepositoryInterface {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async sumAllValorOfMonthLessThanZeroByUsuarioId(usuariosId: string) {
    const currentDate = new Date();

    const firstDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );

    const lastDayOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      0
    );

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
}
