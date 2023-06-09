import { describe, test, expect } from "vitest";

import { buscarUltimoDiaMes } from "./buscarUltimoDiaMes";

describe("buscarUltimoDiaMes", () => {
  describe("Quando função for execultada", () => {
    test("Deveria ser capaz retornar a ultima data do mês", () => {
      const ultimaData = buscarUltimoDiaMes();

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
