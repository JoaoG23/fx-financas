import { PrismaConexao } from "../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();

export const limparTabelaTiposDespesas = async () => {
  const limpar = await prisma.tipos_despesas.deleteMany({});
  return limpar;
};
