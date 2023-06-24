import { endpoint } from "../../../../services/endpoint";

export async function buscarTodosTipos(subelementosId: string) {
  const resposta = await endpoint.get(`/tipos/subelementos/${subelementosId}`);
  return resposta;
}
