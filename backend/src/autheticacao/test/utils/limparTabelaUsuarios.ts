import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const limparTabelaUsuarios = async () => {
    const limpar = await prisma.usuarios.deleteMany({})
    return limpar;
}