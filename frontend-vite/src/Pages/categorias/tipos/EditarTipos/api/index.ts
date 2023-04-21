import { endpoint } from "../../../../../services/endpoint";
import { Tipo } from "../../../../../types/Tipo";

export async function editarTipoPorId(id: string, tipos: Tipo) {
  const resposta = await endpoint.put(`/tipos/${id}`, tipos);
  return resposta;
}
export async function buscarUmTipoPorId(id: string) {
  const resposta = await endpoint.get(`/tipos/${id}`);
  return resposta;
}
