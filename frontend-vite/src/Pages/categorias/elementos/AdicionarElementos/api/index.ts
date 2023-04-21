import { endpoint } from "../../../../../services/endpoint";
import { Elemento } from "../../../../../types/Elemento";


export async function adicionarElemento(elementos: Elemento) {
	const resposta = await endpoint.post(`/elementos`,elementos
	);
	return resposta;
}

