import { describe } from "vitest";

import { converterValoresItemFluxocaixa } from "./converterValoresItemFluxocaixa";
describe("converterValoresItemFluxocaixa", () => {
  describe("Quando enviar valor dos items fluxo de caixa", () => {
    test("Deveria ser capaz de retornar nulos menos o (entradaSaida) ", () => {
      const id = "USL19099";
      const retorno = converterValoresItemFluxocaixa(id, {
        descricao: "descricao do item",
        entradaSaida: true,
        valor: "100",
        saldo: 0,
        elementosId: "",
        locaisId: "",
        subelementosId: "",
        tiposId: "",
        subtiposId: "",
      });

      expect(retorno).toHaveProperty("descricao", "descricao do item");
      expect(retorno).toHaveProperty("valor", 100);
      expect(retorno).toHaveProperty("elementosId", null);
      expect(retorno).toHaveProperty("usuariosId", id);
      expect(retorno).toHaveProperty("locaisId", null);
      expect(retorno).toHaveProperty("subelementosId", null);
      expect(retorno).toHaveProperty("tiposId", null);
      expect(retorno).toHaveProperty("subtiposId", null);
      expect(retorno).toHaveProperty("saldo", 0);
    });
  });

  describe("Quando enviar todos valores, resaltando propriedade valor = 100 e entradaSaida = false", () => {
    test("Retorne propriedade valor (-100) representando um valor negativo", () => {
      const id = "USL19099";
      const retorno = converterValoresItemFluxocaixa(id, {
        descricao: "descricao do item",
        entradaSaida: false,
        valor: "100",
        saldo: 0,
        elementosId: "",
        locaisId: "",
        subelementosId: "",
        tiposId: "",
        subtiposId: "",
      });

      expect(retorno).toHaveProperty("valor", -100);
    });
  });
});
