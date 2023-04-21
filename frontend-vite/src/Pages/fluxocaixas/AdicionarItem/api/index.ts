import { endpoint } from "../../../../services/endpoint";
import { ItemFluxoCaixa } from "../../../../types/ItemFluxoCaixa";



export async function adicionarItem(elementos: ItemFluxoCaixa) {
	const resposta = await endpoint.post(`/fluxocaixa`,elementos
	);
	return resposta;
}

