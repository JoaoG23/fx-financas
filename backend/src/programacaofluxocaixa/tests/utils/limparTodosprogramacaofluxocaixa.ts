import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia()

export const limparTodasProgramacao = async () => {
  return await prisma.programacao_fluxocaixa.deleteMany({});
};
