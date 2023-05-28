import { afterEach, describe, expect, test } from "vitest";

import { limparTabelaLocais } from "../../test/utils/limparTabelaLocais";
import { localCriado } from "../../test/mock/locais";
import { LocaisRepository } from "../locais.repository";

export function salvarItemTeste() {
  describe("save", () => {


    describe("Quando dados locais enviado para o metodos", () => {
      afterEach(async () => {
        await limparTabelaLocais();
      });

      const repository = new LocaisRepository();
      test("Deveria salvar persistir dos dados na tabela", async () => {
        const retorno = await repository.save(localCriado);
        expect(retorno).toHaveProperty("descricao", "BRADESCO");
        expect(retorno).toHaveProperty("usuariosId", null);
      });
    });
  });
}
