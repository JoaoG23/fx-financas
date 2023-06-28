import { endpoint } from "../../../../services/endpoint";
import { ItemFluxoCaixa } from "../../../../types/ItemFluxoCaixa";



export async function adicionarItemEmMassa(elementos: ItemFluxoCaixa[]) {
	const resposta = await endpoint.post(`/fluxocaixa/massa`,elementos);
	return resposta;
}

