import { endpoint } from "../../../../services/endpoint";
import { Usuario } from "../../../../types/usuario/Usuario";

export async function buscarUsuarioPorId(id: string) {
  const resposta = await endpoint.get(`/usuarios/${id}`);
  return resposta;
}
export async function editarUsuarioPorId(id: string, usuario: Usuario) {
  const resposta = await endpoint.put(`/usuarios/${id}`, usuario);
  return resposta;
}
