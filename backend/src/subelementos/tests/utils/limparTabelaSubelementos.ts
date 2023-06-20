import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaSubelementos = async () => {
    const limpar = await prisma.subelementos.deleteMany({})
    return limpar;
}