import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const limparTabelaSubelementos = async () => {
  const limpar = await prisma.subelementos.deleteMany({});
  return limpar;
};
