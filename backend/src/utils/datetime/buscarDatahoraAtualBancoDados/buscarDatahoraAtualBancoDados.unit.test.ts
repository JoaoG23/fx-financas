import { describe, test, expect } from "vitest";

import { buscarDatahoraAtualBancoDados } from "./buscarDatahoraAtualBancoDados";

describe("buscarDatahoraAtualBancoDados", () => {
  describe("Quando função for execultada", () => {
    test("Deveria ser capaz de retorna a datahora atual", () => {
      const ultimaData = buscarDatahoraAtualBancoDados();
      expect(ultimaData).toBeTruthy();
    });
  });
});
