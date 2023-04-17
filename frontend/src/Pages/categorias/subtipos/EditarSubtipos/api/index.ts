import { endpoint } from "../../../../../services/endpoint";
import { Subtipo } from "../../../../../types/Subtipo";

export async function editarSubtipoPorId(id: string, subtipos: Subtipo) {
  const resposta = await endpoint.put(`/subtipos/${id}`, subtipos);
  return resposta;
}
export async function buscarUmSubtipoPorId(id: string) {
  const resposta = await endpoint.get(`/subtipos/${id}`);
  return resposta;
}
