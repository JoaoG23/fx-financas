import { endpoint } from "../../../../services/endpoint";
import { Local } from "../../../../types/Local";



export async function adicionarLocal(local: Local) {
	const resposta = await endpoint.post(`/locais`,local
	);
	return resposta;
}

