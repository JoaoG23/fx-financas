import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const limparTabelaLocais = async () => {
  const limpar = await prisma.locais.deleteMany({});
  return limpar;
};
