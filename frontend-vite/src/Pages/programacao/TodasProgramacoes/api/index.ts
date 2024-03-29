import { endpoint } from "../../../../services/endpoint";
import { CriteriosPesquisaItemFluxoCaixa } from "../../../../types/CriteriosPesquisa";

import { buscaDadoUsuarioNaSessao } from "../../../../utils/buscaDadoUsuarioNaSessao";

export async function pesquisarProgramacoesPorCriterio(
  criteriosBusca: CriteriosPesquisaItemFluxoCaixa
) {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const { descricao, entradaOuSaidaOuTodos } = criteriosBusca;
  const resposta = await endpoint.get(`/programacao/pesquisa`, {
    params: {
      usuariosId: idUsuario,
      entradaOuSaidaOuTodos,
      descricao,
    },
  });
  return resposta;
}
