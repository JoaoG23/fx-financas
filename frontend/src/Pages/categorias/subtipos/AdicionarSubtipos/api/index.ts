import { endpoint } from "../../../../../services/endpoint";
import { Subtipo } from "../../../../../types/Subtipo";


export async function adicionarSubtipo(subtipo: Subtipo) {
	const resposta = await endpoint.post(`/subtipos`,subtipo
	);
	return resposta;
}

