import { describe, test, expect, afterEach } from "vitest";
import { FluxoCaixaRepository } from "./fluxocaixa.repository";
import { limparTabelaFluxoCaixa } from "../test/utils/limparTabelaFluxoCaixa";
import {
  itemFluxocaixaCriado,
  itemFluxocaixaEditado,
} from "../test/mock/fluxocaixasCriado";
import { Decimal } from "@prisma/client/runtime";
import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";

describe("fluxocaixa.repository", () => {
  const repository = new FluxoCaixaRepository();
  const criarItem = async (item: FluxocaixaDto) => {
    return await repository.save(item);
  };

  describe("save", () => {
    afterEach(async () => {
      await limparTabelaFluxoCaixa();
    });

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
  describe("findAll", () => {
    afterEach(async () => {
      await limparTabelaFluxoCaixa();
    });

    describe("Quanto funcao for execultada", () => {
      test("Deveria capaz de listar item salvo no table fluxo de caixa", async () => {
        await criarItem(itemFluxocaixaCriado);
        const retorno = await repository.findAll();

        expect(retorno).not.toBeNull();
        expect(retorno).not.toBeUndefined();
      });
    });

    describe("Quanto funcao for execultada", () => {
      test("Deveria mostrar vazio", async () => {
        const retorno = await repository.findAll();

        expect(retorno).not.toBeNull();
        expect(retorno).not.toBeUndefined();
        expect(retorno).not.toBeFalsy();
        expect(retorno).toStrictEqual([]);
      });
    });
  });

  describe("update", () => {
    describe("Quanto funcao for execultada", () => {
      afterEach(async () => {
        await limparTabelaFluxoCaixa();
      });
      test("Deveria capaz de atualizar salvo no table fluxo de caixa", async () => {
        const { id } = await criarItem(itemFluxocaixaCriado);

        const retorno = await repository.update(id, itemFluxocaixaEditado);
        expect(retorno).toHaveProperty("descricao", "Editado");
        expect(retorno).toHaveProperty("valor", new Decimal(0));
        expect(retorno).toHaveProperty("elementosId", null);
        expect(retorno).toHaveProperty("usuariosId", null);
        expect(retorno).toHaveProperty("locaisId", null);
        expect(retorno).toHaveProperty("subelementosId", null);
        expect(retorno).toHaveProperty("tiposId", null);
        expect(retorno).toHaveProperty("subtiposId", null);
        expect(retorno).toHaveProperty("saldo", new Decimal(0));
      });
    });
  });
});
