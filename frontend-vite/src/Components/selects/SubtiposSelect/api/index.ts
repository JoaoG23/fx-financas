import { endpoint } from "../../../../services/endpoint";

export async function buscarTodosSubTipos(tiposId: string) {
  const resposta = await endpoint.get(`/subtipos/tipos/${tiposId}`);
  return resposta;
}
