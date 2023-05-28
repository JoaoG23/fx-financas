import { describe, expect, test } from "vitest";
import { TratadorErros } from "../TratadorErros/TratadorErros";
describe("TratadorErros", () => {
  const tratadorErros = new TratadorErros();

  describe("tratarErroSemStatus", () => {
    describe("SUCESSO quando for um parâmentro (false) ou (nulo) ou (undefined)", () => {
      test("Deveria retorna valor de numero 400 referente statusCode erro", () => {
        expect(tratadorErros.tratarErroSemStatus(undefined)).toBe(400);
      });
    });

    describe("SUCESSO quando for um parâmentro (true) valor 333 ", () => {
      test("Deveria retorna valor de numero 333 referente statusCode selecionado", () => {
        expect(tratadorErros.tratarErroSemStatus(333)).toBe(333);
      });
    });
  });
});
