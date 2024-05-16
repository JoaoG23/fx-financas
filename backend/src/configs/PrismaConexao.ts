import { PrismaClient } from "@prisma/client";

export class PrismaConexao extends PrismaClient {
  private static prismaClient: PrismaClient | null = null;
  public static getInstancia(): PrismaConexao {
    if (PrismaConexao.prismaClient === null) {
      // Se a variavel ainda não foi instanciada retorna ela
      return (PrismaConexao.prismaClient = new PrismaConexao());
    }
    // Se não retorna a instancia que já existe
    return PrismaConexao.prismaClient;
  }
}
