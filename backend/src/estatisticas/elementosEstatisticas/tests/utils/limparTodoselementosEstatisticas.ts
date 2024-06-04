import { PrismaConexao } from "../../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const limparTodosElementosEstatisticas = async () => {
  return await prisma.elementos.deleteMany({});
};
