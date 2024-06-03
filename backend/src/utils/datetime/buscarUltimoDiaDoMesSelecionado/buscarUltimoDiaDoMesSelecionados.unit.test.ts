import { describe, test, expect } from "vitest";

import { buscarUltimoDiaDoMesSelecionado } from "./buscarUltimoDiaDoMesSelecionado";

describe("buscarUltimoDiaDoMesSelecionado", () => {
  describe("Quando função for execultada", () => {
    test("Deveria ser capaz retornar a primeira data do mês", () => {
      const mes = 12;
      const dataAtual = new Date();
      const esperadaData = new Date(dataAtual.getFullYear(), mes -1 , 0);

      const primeiraData = buscarUltimoDiaDoMesSelecionado(mes);

      expect(primeiraData).toStrictEqual(esperadaData);
    });
  });
});
