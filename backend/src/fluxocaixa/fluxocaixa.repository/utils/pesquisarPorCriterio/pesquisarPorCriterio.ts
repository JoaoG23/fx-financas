import { CriteriosPesquisa } from "../../../interfaces/CriteriosPesquisa";

import { Paginacao } from "../../../../utils/Paginacao";

import { selecionarSeEntradaSaidasOuTodos } from "./selecionarSeEntradaSaidasOuTodos/selecionarSeEntradaSaidasOuTodos";

import { PrismaConexao } from "../../../../configs/PrismaConexao";

const prisma = PrismaConexao.getInstancia();
const paginacao = new Paginacao();

export async function pesquisarSemData(
  criterios: CriteriosPesquisa
): Promise<[object, object[]]> {
  const { numero_pagina, quantidade_items_pagina } = criterios;

  const itemsPorPagina = parseInt(quantidade_items_pagina);
  const entradaOuSaidaTodosItems: string = criterios?.entradaOuSaidaOuTodos;

  const quantidadeTotalRegistros = await prisma.fluxocaixa.count({
    where: {
      AND: selecionarSeEntradaSaidasOuTodos(
        entradaOuSaidaTodosItems,
        criterios
      ),
    },
  });

  const pularPagina = (numero_pagina - 1) * itemsPorPagina;

  const totalQuantidadePaginas = await paginacao.retornaQuantidadePaginas(
    quantidadeTotalRegistros,
    itemsPorPagina
  );

  const itemsDaPagina = await prisma.fluxocaixa.findMany({
    orderBy: [
      {
        data_insersao: "desc",
      },
    ],
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
      tipos_despesas: {
        select: {
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
    },
    where: {
      AND: selecionarSeEntradaSaidasOuTodos(
        entradaOuSaidaTodosItems,
        criterios
      ),
    },
    skip: pularPagina,
    take: itemsPorPagina,
  });

  return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsDaPagina];
}
