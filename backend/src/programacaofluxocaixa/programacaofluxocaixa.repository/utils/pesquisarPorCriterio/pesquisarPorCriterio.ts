import { PrismaClient } from "@prisma/client";
import { retornarSemDataParametrosPesquisa } from "./retornaSemDataParametrosPesquisa";
import { CriteriosPesquisa } from "../../../../fluxocaixa/interfaces/CriteriosPesquisa";

const prisma = new PrismaClient();

export async function pesquisarSemData(criterios: CriteriosPesquisa) {
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
      AND: retornarSemDataParametrosPesquisa(criterios),
    },
  });

  return itemsDaPagina;
}
