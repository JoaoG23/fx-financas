// Service
import { requestAtualizaHorario } from "./requestAtualizaHorario/requestAtualizaHorario";

type Props = {
	id?: number;
	start?: Date;
	end?: Date;
};

export async function atualizarHorarioEvento(dados: Props) {
	const { id, start, end } = dados;

	const extrairSomenteHoraInicial: string = start?.toLocaleTimeString()!;
	const extrairSomenteHoraFinal: string = end?.toLocaleTimeString()!;

	const horarioInicial = `1970-01-01T${extrairSomenteHoraInicial}.00Z`;
	const horarioFinal = `1970-01-01T${extrairSomenteHoraFinal}.00Z`;


	const agendamentoAtualizado = {
		data_agendamento: start,
		hora_inicio: horarioInicial,
		hora_fim:horarioFinal ,
	};

	await requestAtualizaHorario(id, agendamentoAtualizado);
}
