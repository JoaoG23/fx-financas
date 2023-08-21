import { endpoint } from "../../../../services/endpoint";


import { buscaDadoUsuarioNaSessao } from "../../../../utils/buscaDadoUsuarioNaSessao";

export async function buscarProgramacoesPorUsuariosId() {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const resposta = await endpoint.get(`/programacao/usuario/descricao/${idUsuario}`);
  return resposta;
}
