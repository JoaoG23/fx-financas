import { endpoint } from "../../../services/endpoint";

export async function logarUsuario(dados: any) {

	const resposta = await endpoint.post(`/logar`,dados);
	return resposta;
}
