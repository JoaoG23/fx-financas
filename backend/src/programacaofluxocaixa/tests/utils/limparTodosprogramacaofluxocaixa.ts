
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()
export const limparTodos{Classe} = async () => {
    return await prisma.{dadosMudados}.deleteMany({})
}
