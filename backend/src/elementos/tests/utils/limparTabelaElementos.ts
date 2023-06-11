import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaElementos = async () => {
    const limpar = await prisma.elementos.deleteMany({})
    return limpar;
}