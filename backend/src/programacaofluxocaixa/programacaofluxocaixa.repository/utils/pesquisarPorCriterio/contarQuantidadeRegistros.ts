import { PrismaClient } from "@prisma/client";

import { retornarSemDataParametrosPesquisa } from "./retornaSemDataParametrosPesquisa";
import { CriteriosPesquisa } from "../../../../fluxocaixa/interfaces/CriteriosPesquisa";

const prisma = new PrismaClient();

export async function contarQuantidadeRegistros(
  criterios: CriteriosPesquisa
): Promise<number> {
  const contagem = await prisma.fluxocaixa.count({
    where: {
      AND: retornarSemDataParametrosPesquisa(criterios),
    },
  });
  return contagem;
}
