import { endpoint } from "../../../../services/endpoint";
import { ItemFluxoCaixa } from "../../../../types/ItemFluxoCaixa";

export async function editarProgramacaoPorId(
  id: string,
  programacao: ItemFluxoCaixa
) {
  const resposta = await endpoint.put(`/programacao/${id}`, programacao);
  return resposta;
}

export async function buscarProgramacaoPorId(id: string) {
  const resposta = await endpoint.get(`/programacao/${id}`);
  return resposta;
}
