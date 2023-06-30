import { PrismaClient } from "@prisma/client";
import { contarQuantidadeRegistros } from "./contarQuantidadeRegistros";
import { Paginacao } from "../../../../utils/Paginacao";
import { retornarSemDataParametrosPesquisa } from "./retornaSemDataParametrosPesquisa";
import { CriteriosPesquisa } from "../../../interfaces/CriteriosPesquisa";

const prisma = new PrismaClient();
const paginacao = new Paginacao();

export async function pesquisarSemData(
  criterios: CriteriosPesquisa
): Promise<[object, object[]]> {
  const { numero_pagina, quantidade_items_pagina } = criterios;

  const itemsPorPagina = parseInt(quantidade_items_pagina);

  const quantidadeTotalItems = await contarQuantidadeRegistros(criterios);
  const pularPagina = (numero_pagina - 1) * itemsPorPagina;

  const quantidadePaginas = await paginacao.retornaQuantidadePaginas(
    quantidadeTotalItems,
    itemsPorPagina
  );

  const itemsDaPagina = await prisma.fluxocaixa.findMany({
    where: {
      AND: retornarSemDataParametrosPesquisa(criterios),
    },
    skip: pularPagina,
    take: itemsPorPagina,
  });

  return [{ quantidadePaginas, quantidadeTotalItems }, itemsDaPagina];
}
