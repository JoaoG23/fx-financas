import { endpoint } from "../../../../../services/endpoint";

export async function buscarUmSubtiposPorId(id: string) {
  const resposta = await endpoint.get(`/subtipos/${id}`);
  return resposta;
}
