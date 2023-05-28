import { describe, test, expect, afterEach } from "vitest";

import { limparTabelaFluxoCaixa } from "../../../test/utils/limparTabelaFluxoCaixa";
import { Decimal } from "@prisma/client/runtime";
import { FluxocaixaDto } from "../../../fluxocaixa.dto/fluxocaixa.dto";
import { itemFluxocaixaCriado } from "../../../test/mock/fluxocaixasCriado";
import { FluxoCaixaRepository } from "../../fluxocaixa.repository";

function countAllByIdUsuarioSubtests() {
  const repository = new FluxoCaixaRepository();
  const criarItem = async (item: FluxocaixaDto) => {
    return await repository.save(item);
  };
  describe("countAllByIdUsuario", () => {
    afterEach(async () => {
      await limparTabelaFluxoCaixa();
    });

    describe("Quando for execultada função", () => {
      test("Deverá contar numero de registros por usuariosId", async () => {
     
       await criarItem(itemFluxocaixaCriado)

       const retorno = await repository.countAllByIdUsuario(null);

       expect(retorno).not.toBeNull();
       expect(retorno).not.toBeUndefined();
       expect(retorno).not.toBeFalsy();
       expect(retorno).toStrictEqual([]);
      });
    });
  });
}
