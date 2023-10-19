import { converterValorNegativoSeForSaida } from "./converterValorNegativoSeSaida";

describe("converterValorNegativoSeForSaida", () => {
  describe("Quando eu enviar 1º argumento como (saida) e 2º Argumento como valor", () => {
    test("Deveria converter valor enviado para negativo", () => {
      const saida: string = "saida";

      const retorno = converterValorNegativoSeForSaida(saida, 1000);
      expect(retorno).toBe(-1000);
    });
    test("Não deveria retorna o valor positivo", () => {
      const saida: string = "saida";

      const retorno = converterValorNegativoSeForSaida(saida, 1000);
      expect(retorno).not.toBe(1000);
    });
  });
  describe("Quando eu enviar 1º argumento como (entrada) e 2º Argumento como valor", () => {
    test("Deveria converter valor enviado para negativo", () => {
      const entrada: string = "entrada";

      const retorno = converterValorNegativoSeForSaida(entrada, 1000);
      expect(retorno).toBe(1000);
    });
  });
});
