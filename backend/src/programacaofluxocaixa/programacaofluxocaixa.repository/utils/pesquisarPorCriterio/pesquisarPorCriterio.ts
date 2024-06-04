import { PrismaConexao } from "../../../../configs/PrismaConexao";

import { CriteriosPesquisa } from "../../../../fluxocaixa/interfaces/CriteriosPesquisa";

import { selecionarSeEntradaSaidasOuTodos } from "./selecionarSeEntradaSaidasOuTodos/selecionarSeEntradaSaidasOuTodos";


export async function pesquisarPorCriterio(criterios: CriteriosPesquisa) {
  
  const prisma = PrismaConexao.getInstancia();

  const entradaOuSaidaTodosItems: string = criterios?.entradaOuSaidaOuTodos;

  const itemsDaPagina = await prisma.programacao_fluxocaixa.findMany({
    include: {
      elementos: {
        select: {
          descricao: true,
        },
      },
      subelementos: {
        select: {
          descricao: true,
        },
      },
      locais: {
        select: {
          id: true,
          descricao: true,
        },
      },
      tipos: {
        select: {
          descricao: true,
        },
      },
      subtipos: {
        select: {
          descricao: true,
        },
      },
      tipos_despesas: {
        select: {
          descricao: true,
        },
      },
    },
    where: {
      AND: selecionarSeEntradaSaidasOuTodos(
        entradaOuSaidaTodosItems,
        criterios
      ),
    },
  });

  return itemsDaPagina;
}
