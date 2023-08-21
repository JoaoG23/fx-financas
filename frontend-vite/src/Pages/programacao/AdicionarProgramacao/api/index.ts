import { endpoint } from "../../../../services/endpoint";
import { ItemFluxoCaixa } from "../../../../types/ItemFluxoCaixa";



export async function adicionarProgramacao(programacao: ItemFluxoCaixa) {
	const resposta = await endpoint.post(`/programacao`,programacao
	);
	return resposta;
}

