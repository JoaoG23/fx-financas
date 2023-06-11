import { describe, expect, test } from "vitest";
import { converterUndefinedParaVazio } from "./converterUndefinedParaVazio";

describe("converterUndefinedParaVazio.spec", () => {
	describe("Quando enviar um valor undefined", () => {
		test("Deverá retornar um valor vazio", () => {
			const valorEnviado = undefined;

			const valorRetornado = converterUndefinedParaVazio(valorEnviado);
			expect(valorRetornado).not.toBeUndefined();
			expect(valorRetornado).toBe("");
		});
	});

	describe("Quando enviar um valor joao", () => {
		test("Deverá retornar um valor joao", () => {
			const valorEnviado = "joao";

			const valorRetornado = converterUndefinedParaVazio(valorEnviado);
			expect(valorRetornado).not.toBeUndefined();
			expect(valorRetornado).toBe("joao");
		});
	});
});
