import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const buscarDatahoraAtualBancoDados = async () => {
  const retorno = await prisma.$queryRaw`SELECT NOW() as datahora`;
  return retorno[0].datahora;
};
