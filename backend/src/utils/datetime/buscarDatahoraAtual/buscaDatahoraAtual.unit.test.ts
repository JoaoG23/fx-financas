import { describe, test, expect } from "vitest";

import { buscaDatahoraAtual } from "./buscaDatahoraAtual";

describe("buscaDatahoraAtual", () => {
  describe("Quando função for execultada", () => {
    test("Deveria ser capaz de retorna a datahora atual", () => {
      const ultimaData = buscaDatahoraAtual();
      expect(ultimaData).toBeTruthy();
    });
  });
});
