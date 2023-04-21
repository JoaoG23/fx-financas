import { endpoint } from "../../../../../services/endpoint";

export async function deletarSublementoPorId(id: string) {
  const resposta = await endpoint.delete(`/subelementos/${id}`);
  return resposta;
}
