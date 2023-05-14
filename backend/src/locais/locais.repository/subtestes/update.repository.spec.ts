import { afterEach, describe, expect, test } from "vitest";

import { limparTabelaLocais } from "../../test/utils/limparTabelaLocais";
import { LocaisRepository } from "../locais.repository";
import { localCriado, localEditado } from "../../test/mock/locais";

export function atualizarItem() {
  describe("update", () => {
    describe("Após dados serem salvo", () => {
      afterEach(async () => {
        await limparTabelaLocais();
      });
      const repository = new LocaisRepository();
      test("Deveria ser capaz editar os dados e salvar-lo no banco", async () => {
        const criado = await repository.save(localCriado);
        const id = criado.id;
        const retorno = await repository.update(id, localEditado as any);
        expect(retorno).toHaveProperty("descricao", "NEXT");
        expect(retorno).toHaveProperty("usuariosId", null);
      });
    });
  });
}
