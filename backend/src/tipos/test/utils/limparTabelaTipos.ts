import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const limparTabelaTipos = async () => {
  const limpar = await prisma.locais.deleteMany({});
  return limpar;
};
