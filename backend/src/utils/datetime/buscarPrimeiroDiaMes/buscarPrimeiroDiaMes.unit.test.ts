import { describe, test, expect } from "vitest";

import { buscarPrimeiroDiaMes } from "./buscarPrimeiroDiaMes";

describe("buscarPrimeiroDiaMes", () => {
  describe("Quando função for execultada", () => {
    test("Deveria ser capaz retornar a primeira data do mês", () => {
      const primeiraData = buscarPrimeiroDiaMes();

      const dataAtual = new Date();
      const esperadaData = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth(),
        1
      );

      expect(primeiraData).toStrictEqual(esperadaData);
    });
  });
});
