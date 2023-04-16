import { endpoint } from "../../../../../services/endpoint";

export async function buscarUmSubElementoPorId(id: string) {
  const resposta = await endpoint.get(`/subelementos/${id}`);
  return resposta;
}
