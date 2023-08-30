import { describe, test, expect } from "vitest";

import { buscarPrimeiroDiaDoMesSelecionado } from "./buscarPrimeiroDiaDoMesSelecionado";

describe("buscarPrimeiroDiaDoMesSelecionado", () => {
  describe("Quando função for execultada", () => {
    test("Deveria ser capaz retornar a primeira data do mês", () => {
      const mes = 12;
      const dataAtual = new Date();
      const esperadaData = new Date(dataAtual.getFullYear(), mes - 1, 1);

      const primeiraData = buscarPrimeiroDiaDoMesSelecionado(mes);

      expect(primeiraData).toStrictEqual(esperadaData);
    });
  });
});
