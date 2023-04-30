import { endpoint } from "../../../../services/endpoint";

export async function deletarItemPorId(id: string) {
  const resposta = await endpoint.delete(`/fluxocaixa/${id}`);
  return resposta;
}
