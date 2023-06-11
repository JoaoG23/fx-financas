
import { EventoBigCalendar } from "../../../../types/EventoBigCalendar";
import { ItemFluxoCaixa } from "../../../../types/ItemFluxoCaixa";
import { converterDataHoraParaEventoTipoBigCalendar } from "../converterDataHoraParaEventoTipoBigCalendar/converterDataHoraParaEventoTipoBigCalendar";

export function retornaArrayEventosConvertido(
	agendamentos: ItemFluxoCaixa[],
	arrayConvertido: EventoBigCalendar[]
) {
	agendamentos?.forEach((evento: ItemFluxoCaixa) => {
		const novoEvento = converterDataHoraParaEventoTipoBigCalendar(evento);
		arrayConvertido.push(novoEvento);
	});

	return arrayConvertido;
}
