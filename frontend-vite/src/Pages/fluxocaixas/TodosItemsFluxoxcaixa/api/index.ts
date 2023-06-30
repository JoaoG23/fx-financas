import { endpoint } from "../../../../services/endpoint";

import { CriteriosPesquisaItemFluxoCaixa } from "../../../../types/CriteriosPesquisa";

import { buscaDadoUsuarioNaSessao } from "../../../../utils/buscaDadoUsuarioNaSessao";


export async function pesquisarItemsFluxoCaixaPaginaPorCriterio(
  numero_pagina: number,
  criteriosBusca: CriteriosPesquisaItemFluxoCaixa
) {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const { descricao } = criteriosBusca;
  const resposta = await endpoint.get(`/fluxocaixa/usuario/pesquisar`, {
    params: {
      numero_pagina,
      quantidade_items_pagina: 10,
      usuariosId: idUsuario,
      descricao,
    },
  });
  return resposta;
}
