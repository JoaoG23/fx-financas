import { verificarSeNegativoERetornaEntradaOuSaida } from "./verificarSeNegativoERetornaEntradaOuSaida";

describe("verificarSeNegativoERetornaEntradaOuSaida", () => {
  describe("Quando eu enviar um valor negativo", () => {
    test("Deveria retorna string = saida", () => {
      const retorno = verificarSeNegativoERetornaEntradaOuSaida(-1000);
      expect(retorno).toBe("saida");
    });
  });
  describe("Quando eu enviar um valor positivo", () => {
    test("Deveria retorna string = entrada", () => {
      const retorno = verificarSeNegativoERetornaEntradaOuSaida(1000);
      expect(retorno).toBe("entrada");
    });
  });
  describe("Quando eu enviar um valor positivo", () => {
    test("Deveria retorna string = entrada", () => {
      const retorno = verificarSeNegativoERetornaEntradaOuSaida(-0);
      expect(retorno).toBe("entrada");
    });
  });
});
