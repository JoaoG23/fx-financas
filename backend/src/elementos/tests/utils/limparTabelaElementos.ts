import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const limparTabelaElementos = async () => {
  const limpar = await prisma.elementos.deleteMany({});
  return limpar;
};
