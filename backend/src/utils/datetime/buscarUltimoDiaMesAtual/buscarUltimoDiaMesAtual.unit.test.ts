import { describe, test, expect } from "vitest";

import { buscarUltimoDiaMesAtual } from "./buscarUltimoDiaMesAtual";

describe("buscarUltimoDiaMes", () => {
  describe("Quando função for execultada", () => {
    test("Deveria ser capaz retornar a ultima data do mês", () => {
      const ultimaData = buscarUltimoDiaMesAtual();

      const dataAtual = new Date();
      const esperadaData = new Date(
        dataAtual.getFullYear(),
        dataAtual.getMonth() + 1,
        0
      );
  

      expect(ultimaData).toStrictEqual(esperadaData);
    });
  });
});
