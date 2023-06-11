import { describe, expect, test } from "vitest";
import { converterParaNumero } from "./converterParaNumero";
describe("converterParaNumero", () => {
  describe("SUCESSO quando for enviar um valor '10' em string", () => {
    test("Deveria retorna 10 em valor numero", () => {
      expect(converterParaNumero("10")).toBe(10);
    });
  });
});
