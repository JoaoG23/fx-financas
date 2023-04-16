import { endpoint } from "../../../../../services/endpoint";
import { Subelemento } from "../../../../../types/Subelemento";


export async function adicionarSubelementos(subelementos: Subelemento) {
	const resposta = await endpoint.post(`/subelementos`,subelementos
	);
	return resposta;
}

