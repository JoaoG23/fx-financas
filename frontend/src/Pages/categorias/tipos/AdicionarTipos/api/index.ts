import { endpoint } from "../../../../../services/endpoint";
import { Tipo } from "../../../../../types/Tipo";


export async function adicionarTipo(tipo: Tipo) {
	const resposta = await endpoint.post(`/tipos`,tipo
	);
	return resposta;
}

