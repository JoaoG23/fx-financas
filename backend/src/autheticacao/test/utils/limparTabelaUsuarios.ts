import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia()

export const limparTabelaUsuarios = async () => {
    const limpar = await prisma.usuarios.deleteMany({})
    return limpar;
}