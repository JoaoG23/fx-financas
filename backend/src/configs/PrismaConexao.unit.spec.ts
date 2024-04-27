import { describe, test, expect } from "vitest";
import { PrismaConexao } from "./PrismaConexao";

describe("Caso de Uso", () => {
  describe("Quando eu instanciar a classe PrismaConexao", () => {
    test("Deveria somente ter apenas uma instancia em memoria não duas", () => {
      const instancia1 = PrismaConexao.getInstancia();
      const instancia2 = PrismaConexao.getInstancia();

      expect(instancia1 === instancia2).toBeTruthy();
    });

    test("Não deveria ter duas instancia do mesmo item", () => {
      const instancia1 = PrismaConexao.getInstancia();
      const instancia2 = PrismaConexao.getInstancia();

      expect(instancia1 === instancia2).not.toBeFalsy();
    });
  });
});
