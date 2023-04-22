import { describe, test, expect, afterEach } from "vitest";
import { FluxoCaixaRepository } from "./fluxocaixa.repository";
import { limparTabelaFluxoCaixa } from "../test/utils/limparTabelaFluxoCaixa";
import { itemFluxocaixaCriado } from "../test/mock/fluxocaixasCriado";
import { Decimal } from "@prisma/client/runtime";

describe("fluxocaixa.repository", () => {
  describe("save", () => {
    afterEach(async () => {
      await limparTabelaFluxoCaixa();
    });

    const repository = new FluxoCaixaRepository();
    describe("Quando dados item do fluxo de caixa enviado", () => {
      test("Deveria salvar persistir dos dados na tabela fluxo_caixa", async () => {
        const retorno = await repository.save(itemFluxocaixaCriado);

        expect(retorno).toHaveProperty("descricao", "Item de teste");
        expect(retorno).toHaveProperty("valor", new Decimal(100));
        expect(retorno).toHaveProperty("elementosId", null);
        expect(retorno).toHaveProperty("usuariosId", null);
        expect(retorno).toHaveProperty("locaisId", null);
        expect(retorno).toHaveProperty("subelementosId", null);
        expect(retorno).toHaveProperty("tiposId", null);
        expect(retorno).toHaveProperty("subtiposId", null);
        expect(retorno).toHaveProperty("saldo", new Decimal(100));
      });
    });
  });
});
