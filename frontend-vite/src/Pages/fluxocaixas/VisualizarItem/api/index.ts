import { endpoint } from "../../../../services/endpoint";

export async function buscarItemPorId(id: string) {
  const resposta = await endpoint.get(`/fluxocaixa/${id}`);
  return resposta;
}
