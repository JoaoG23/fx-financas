import { atualizarHorariosUmAgendamento } from "../..";

type DataHoraAgendamento = {
	data_insersao?: Date | string;
};
export async function requestAtualizaHorario(id: any, body: DataHoraAgendamento) {
		const sucesso = await atualizarHorariosUmAgendamento(id, body)
		const sucessoData = sucesso.data;
		return sucessoData;
}

