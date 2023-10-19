import { removerSimboloMenosDoValorNegativo } from "./removerSimboloMenosDoValorNegativo";

describe("removerSimboloMenosDoValor", () => {
  describe("Quando eu enviar um valor", () => {
    test("Deveria retirar o simbolo de menos e retorna valor absoluto", () => {
      const retorno = removerSimboloMenosDoValorNegativo(-1000);
      expect(retorno).toBe(1000);
    });
    test("Não deveria retorna o valor negativo", () => {
      const retorno = removerSimboloMenosDoValorNegativo(-1000);
      expect(retorno).not.toBe(-1000);
    });
  });
});
