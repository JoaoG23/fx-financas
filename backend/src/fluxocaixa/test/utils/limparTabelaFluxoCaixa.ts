import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const limparTabelaFluxoCaixa = async () => {
    const limpar = await prisma.fluxocaixa.deleteMany({})
    return limpar;
}