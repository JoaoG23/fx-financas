import { PrismaClient } from "@prisma/client";
import { contarQuantidadeRegistros } from "./contarQuantidadeRegistros";
import { Paginacao } from "../../../../utils/Paginacao";
import { retornarSemDataParametrosPesquisa } from "./retornaSemDataParametrosPesquisa";
import { CriteriosPesquisa } from "../../../../fluxocaixa/interfaces/CriteriosPesquisa";

const prisma = new PrismaClient();
const paginacao = new Paginacao();

export async function pesquisarSemData(
  criterios: CriteriosPesquisa
): Promise<[object, object[]]> {
  const { numero_pagina, quantidade_items_pagina } = criterios;

  const itemsPorPagina = parseInt(quantidade_items_pagina);

  const quantidadeTotalRegistros = await contarQuantidadeRegistros(criterios);
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
      AND: retornarSemDataParametrosPesquisa(criterios),
    },
    skip: pularPagina,
    take: itemsPorPagina,
  });

  return [{ totalQuantidadePaginas, quantidadeTotalRegistros }, itemsDaPagina];
}
