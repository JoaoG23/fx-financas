
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const limparTodosElementosEstatisticas = async () => {
    return await prisma.elementos.deleteMany({})
}
