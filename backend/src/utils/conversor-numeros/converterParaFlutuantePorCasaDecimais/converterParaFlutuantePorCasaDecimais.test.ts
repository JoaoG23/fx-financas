import { describe, expect, test } from "vitest";
import { converterParaFlutuantePorCasaDecimais } from "./converterParaFlutuantePorCasaDecimais";

describe("converterParaFlutuantePorCasaDecimais", () => {
  describe("SUCESSO quando for enviar um valor com tres casa decimai", () => {
    test("Deveria retorna 10", () => {
      const retorno = converterParaFlutuantePorCasaDecimais(10.102);
      expect(retorno).toBe(10.1);
    });
  });
});
