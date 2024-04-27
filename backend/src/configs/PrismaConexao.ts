import { PrismaClient } from "@prisma/client";

export class PrismaConexao {
  private static prismaClient: PrismaClient | null = null;
  private constructor() {}

  public static getInstancia(): PrismaConexao {
    if (PrismaConexao.getInstancia === null) {
      // Se a variavel ainda não foi instanciada retorna ela
      return (PrismaConexao.prismaClient = new PrismaConexao());
    }
    // Se não retorna a instancia que já existe
    return PrismaConexao.prismaClient;
  }
}
