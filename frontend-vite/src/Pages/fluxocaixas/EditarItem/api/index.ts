import { endpoint } from "../../../../services/endpoint";
import { ItemFluxoCaixaCriado } from "../../../../types/ItemFluxoCaixa";

export async function editarItemPorId(id :string ,elementos: ItemFluxoCaixaCriado) {
	const resposta = await endpoint.put(`/fluxocaixa/${id}`,elementos
	);
	return resposta;
}


export async function buscarItemPorId(id: string) {
  const resposta = await endpoint.get(`/fluxocaixa/${id}`);
  return resposta;
}
