import { afterEach, describe, expect, test } from "vitest";

import { limparTabelaLocais } from "../../test/utils/limparTabelaLocais";
import { LocaisRepository } from "../locais.repository";
import { localCriado } from "../../test/mock/locais";

function deletarItem() {
  describe("delete", () => {
    afterEach(async () => {
      await limparTabelaLocais();
    });

    const repository = new LocaisRepository();
    describe("Quando idItem for enviado", () => {
      test("Deveria ser capaz realizar a exclusão do item no banco de dados", async () => {

        //   const retorno = await repository.save(itemFluxocaixaCriado);
        //   expect(retorno).toHaveProperty("descricao", "Item de teste");
        //   expect(retorno).toHaveProperty("valor", new Decimal(100));
        //   expect(retorno).toHaveProperty("elementosId", null);
        //   expect(retorno).toHaveProperty("usuariosId", null);
        //   expect(retorno).toHaveProperty("locaisId", null);
        //   expect(retorno).toHaveProperty("subelementosId", null);
        //   expect(retorno).toHaveProperty("tiposId", null);
        //   expect(retorno).toHaveProperty("subtiposId", null);
        //   expect(retorno).toHaveProperty("saldo", new Decimal(100));
      });
    });
  });
}
