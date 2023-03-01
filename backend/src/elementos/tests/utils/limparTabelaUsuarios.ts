import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaUsuarios = async () => {
    const limpar = await prisma.usuario.deleteMany({})
    return limpar;
}