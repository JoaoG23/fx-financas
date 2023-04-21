import { endpoint } from "../../../../../services/endpoint";

export async function deletarTipoPorId(id: string) {
  const resposta = await endpoint.delete(`/tipos/${id}`);
  return resposta;
}
