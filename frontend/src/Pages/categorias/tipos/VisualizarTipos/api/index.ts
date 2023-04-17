import { endpoint } from "../../../../../services/endpoint";

export async function buscarUmTiposPorId(id: string) {
  const resposta = await endpoint.get(`/tipos/${id}`);
  return resposta;
}
