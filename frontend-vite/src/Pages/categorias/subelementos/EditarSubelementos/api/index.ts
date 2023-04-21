import { endpoint } from "../../../../../services/endpoint";
import { Subelemento } from "../../../../../types/Subelemento";

export async function editarSubelementoPorId(id: string, subelementos: Subelemento) {
  const resposta = await endpoint.put(`/subelementos/${id}`, subelementos);
  return resposta;
}
export async function buscarUmSubelementoPorId(id: string) {
  const resposta = await endpoint.get(`/subelementos/${id}`);
  return resposta;
}
