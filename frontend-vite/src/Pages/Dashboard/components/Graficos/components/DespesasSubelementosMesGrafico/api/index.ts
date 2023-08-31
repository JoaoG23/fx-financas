import { endpoint } from "../../../../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorSubelementosUsuarios = async (mes: number) => {
  const resposta = await endpoint.get(`/estatistica/subelementos/despesas_subelementos/`, {
    params: {
      mes,
      usuariosId: idUsuario,
    },
  });
  return resposta;
};
