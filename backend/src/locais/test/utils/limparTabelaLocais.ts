import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaLocais = async () => {
    const limpar = await prisma.locais.deleteMany({})
    return limpar;
}