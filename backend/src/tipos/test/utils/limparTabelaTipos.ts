import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaTipos = async () => {
    const limpar = await prisma.locais.deleteMany({})
    return limpar;
}