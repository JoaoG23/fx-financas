import { endpoint } from "../../../../services/endpoint";
import { Local } from "../../../../types/Local";

export async function editarLocalPorId(id: string, local: Local) {
  const resposta = await endpoint.put(`/locais/${id}`, local);
  return resposta;
}
export async function buscarLocalPorId(id: string) {
  const resposta = await endpoint.get(`/locais/${id}`);
  return resposta;
}
