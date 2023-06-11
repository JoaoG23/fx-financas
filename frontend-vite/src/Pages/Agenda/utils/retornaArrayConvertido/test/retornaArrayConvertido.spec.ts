import { describe, expect, test } from "vitest";
import { agendamentosMocadoTestes } from "./mock/data";
import { retornaArrayEventosConvertido } from "..";
import { EventoBigCalendar } from "../../../../../../../types/EventoBigCalendar";

describe("retornaArrayConvertido.spec", () => {
	describe("Quando enviar um array de objetos tipo OperacaoAgendamento", () => {
		test("Deveria retorna um array de objetos eventos tipo EventoBigCalendar", () => {
			const arrayEventosConvertidos: EventoBigCalendar[] = [];

			const agendamentoTipoBigCalendar = retornaArrayEventosConvertido(
				agendamentosMocadoTestes,
				arrayEventosConvertidos
			);

			expect(agendamentoTipoBigCalendar[0]).toEqual({
				id: "61750202-C7DF-40C0-A9D9-9A2E127CFC19",
				start: new Date('2023-02-13T16:00:00.000Z'),
				end: new Date('2023-02-13T18:00:00.000Z'),
				title: "Fornecedor:   Cliente: Lucca e Laís Pães e Doces.ltda",
			});
		});
	});
});
