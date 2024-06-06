import { PrismaClient } from "@prisma/client";
export class PrismaConexao extends PrismaClient {
  private static prismaClient: PrismaClient | null = null;
  public static getInstancia(): PrismaConexao {
    if (PrismaConexao.prismaClient === null) {
      return (PrismaConexao.prismaClient = new PrismaConexao({
        log: ["info"],
      }));
    }
    return PrismaConexao.prismaClient;
  }
}
