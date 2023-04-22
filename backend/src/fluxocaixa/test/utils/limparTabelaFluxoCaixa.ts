import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaFluxoCaixa = async () => {
    const limpar = await prisma.fluxocaixa.deleteMany({})
    return limpar;
}