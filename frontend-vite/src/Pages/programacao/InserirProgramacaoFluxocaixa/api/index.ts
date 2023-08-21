import { endpoint } from "../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../utils/buscaDadoUsuarioNaSessao";

export async function capturarTodosItemsProgramacaoPorUsuariosId() {

  const { idUsuario } = buscaDadoUsuarioNaSessao()
  const resposta = await endpoint.post(`/programacao/capturar/${idUsuario}`);
  return resposta;
}
