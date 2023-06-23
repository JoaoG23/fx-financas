import { describe, expect, test } from "vitest";
import { converterNegativoParaAbsoluto } from "./converterNegativoParaAbsoluto";
describe("converterNegativoParaAbsoluto", () => {
  describe("SUCESSO quando for enviar um valor -10", () => {
    test("Deveria retorna 10 em valor numero", () => {
      expect(converterNegativoParaAbsoluto(-10)).toBe(10);
    });
  });
});
