import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaTiposDespesas = async () => {
    const limpar = await prisma.tipos_despesas.deleteMany({})
    return limpar;
}