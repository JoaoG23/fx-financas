import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const limparTodosProgramacao = async () => {
  return await prisma.programacao_fluxocaixa.deleteMany({});
};
