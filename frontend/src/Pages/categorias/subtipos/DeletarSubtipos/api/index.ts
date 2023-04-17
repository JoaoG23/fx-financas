import { endpoint } from "../../../../../services/endpoint";

export async function deletarSubtipoPorId(id: string) {
  const resposta = await endpoint.delete(`/subtipos/${id}`);
  return resposta;
}
