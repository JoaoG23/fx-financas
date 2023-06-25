import { endpoint } from "../../../../services/endpoint";

export async function buscarUsuarioPorId(idUsuario: string) {
  const resposta = await endpoint.get(`/usuarios/${idUsuario}`);
  return resposta;
}
