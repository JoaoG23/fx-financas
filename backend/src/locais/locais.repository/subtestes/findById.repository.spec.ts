import { afterEach, describe, expect, test } from "vitest";

import { limparTabelaLocais } from "../../test/utils/limparTabelaLocais";
import { LocaisRepository } from "../locais.repository";
import { localCriado } from "../../test/mock/locaisCriado";

export function buscarPorId() {
  describe("findById", () => {
    describe("Quando após salvo", () => {
      afterEach(async () => {
        await limparTabelaLocais();
      });
      const repository = new LocaisRepository();
      test("Deveria ser capaz de item por id", async () => {
        const criado = await repository.save(localCriado);
        const id = criado.id;
        const retorno = await repository.findById(id);

        expect(retorno).toHaveProperty("descricao", "BRADESCO");
        expect(retorno).toHaveProperty("usuariosId", null);
      });
    });
  });
}
