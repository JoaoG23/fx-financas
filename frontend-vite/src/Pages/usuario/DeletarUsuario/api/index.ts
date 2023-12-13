import { endpoint } from "../../../../services/endpoint";

export async function deletarUsuarioPorId(id: string) {
  const resposta = await endpoint.delete(`/usuarios/${id}`);
  return resposta;
}
