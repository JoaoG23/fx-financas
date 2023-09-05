import { endpoint } from "../../../../../../../../services/endpoint";

import { buscaDadoUsuarioNaSessao } from "../../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorTiposUsuarios = async (mes: number) => {
  const resposta = await endpoint.get(`/estatistica/tipos/despesas_tipos`, {
    params: {
      mes,
      usuariosId: idUsuario,
    },
  });
  return resposta;
};
