import { endpoint } from "../../../../../services/endpoint";
import { Elemento } from "../../../../../types/Elemento";

export async function editarElementoPorId(id: string, elementos: Elemento) {
  const resposta = await endpoint.put(`/elementos/${id}`, elementos);
  return resposta;
}
export async function buscarUmElementoPorId(id: string) {
  const resposta = await endpoint.get(`/elementos/${id}`);
  return resposta;
}
