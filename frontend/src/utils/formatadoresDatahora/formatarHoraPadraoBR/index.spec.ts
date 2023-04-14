import { describe, expect } from "vitest";
import { formataHoraPadraoBR } from ".";

describe("formatarDataPadraoBR", () => {
	describe("Quando for enviada a dateTime para funcao", () => {
		test("Deveria retorna somente a hora em formato pt-br,  Ex: 06:20", () => {
			const dataEnviada = "2020-01-29T06:20:00.000Z";
			const horaPtBr = formataHoraPadraoBR(dataEnviada);
			expect(horaPtBr).toBe("06:20");
		});
	});
});
