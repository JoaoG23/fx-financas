import { endpoint } from "../../../../../services/endpoint";

export async function deletarElementoPorId(id: string) {
  const resposta = await endpoint.delete(`/elementos/${id}`);
  return resposta;
}
