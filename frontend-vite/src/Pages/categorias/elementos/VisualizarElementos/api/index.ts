import { endpoint } from "../../../../../services/endpoint";

export async function buscarUmElementoPorId(id: string) {
  const resposta = await endpoint.get(`/elementos/${id}`);
  return resposta;
}
