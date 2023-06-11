
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const limparTodosElementosClassificacoes = async () => {
    return await prisma.elementos.deleteMany({})
}
