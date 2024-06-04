import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const buscarDatahoraAtualBancoDados = async () => {
  const retorno = await prisma.$queryRaw`SELECT NOW() as datahora`;
  return retorno[0].datahora;
};
