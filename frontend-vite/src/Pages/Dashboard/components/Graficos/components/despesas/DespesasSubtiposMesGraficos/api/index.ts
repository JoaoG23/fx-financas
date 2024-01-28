import { endpoint } from "../../../../../../../../services/endpoint";

import { buscaDadoUsuarioNaSessao } from "../../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorSubtiposUsuarios = async (mes: number) => {
  const resposta = await endpoint.get(`/estatistica/subtipos/despesas_subtipos`, {
    params: {
      mes,
      usuariosId: idUsuario,
    },
  });
  console.log("🚀 ~ buscarDespesaMesPorSubtiposUsuarios ~ resposta:", resposta)
  return resposta;
};
