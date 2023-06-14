import { separaDadosTempo } from "./utils/separaDadosTempo";
import { separaDadosData } from "./utils/separaDadosData";
import { ItemFluxoCaixa } from "../../../../types/ItemFluxoCaixa";
import { converterUndefinedParaVazio } from "../../../../utils/converterUndefinedParaVazio/converterUndefinedParaVazio";
/*

@Autor Joao Guilherme
converte dataHora dos dados
vindo do Agendamento backend
para eventos do calendario
bigCalendar

*/

export function converterDataHoraParaEventoTipoBigCalendar(
	evento: ItemFluxoCaixa
) {
	// const dataChegadaNewDate = new Date(evento.data_insersao as any);
	// const horarioInicialConvertido = new Date(evento.hora_inicio as any);
	// const horarioSaidaConvertido = new Date(evento.hora_fim as any);

	// const { dia, mes, ano } = separaDadosData(dataChegadaNewDate);
	// const { hora: horaInicial, minuto: minutoInicial } = separaDadosTempo(
	// 	horarioInicialConvertido
	// );
	// const { hora: horaFim, minuto: minutoFim } = separaDadosTempo(
	// 	horarioSaidaConvertido
	// );

	// const horarioChegada = new Date(
	// 	ano,
	// 	mes,
	// 	dia,
	// 	horaInicial,
	// 	minutoInicial,
	// 	0
	// );

	// const fornecedor: string = converterUndefinedParaVazio(evento.fornecedores?.razaoSocial)!
	// const cliente: string = converterUndefinedParaVazio(evento.clientes?.razaoSocial)!

	// const horaioSaida = new Date(ano, mes, dia, horaFim, minutoFim, 0);
	// const eventoConvetido = {
	// 	id: evento.codigo_agendamento,
	// 	title: `TEste`,
	// 	start: horarioChegada,
	// 	end: horaioSaida,
	// };

	// return eventoConvetido;
}
