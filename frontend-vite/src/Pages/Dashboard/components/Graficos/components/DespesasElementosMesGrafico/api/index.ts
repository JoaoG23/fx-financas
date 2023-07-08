import { endpoint } from "../../../../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorElementoUsuarios = async () => {
  const resposta = await endpoint.get(
    `/estatistica/despesas_elemento/${idUsuario}`
  );
  return resposta;
};
