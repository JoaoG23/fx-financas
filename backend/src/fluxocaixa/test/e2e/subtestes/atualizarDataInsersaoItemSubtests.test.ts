import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaFluxoCaixa } from "../../utils/limparTabelaFluxoCaixa";

import { itemFluxocaixaCriado } from "../../mock/fluxocaixasCriado";

import { itemFluxocaixaEditado } from "../../mock/fluxocaixasEditado";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

export function atualizarDataInsersaoItemSubtests() {
  describe("PATCH /api/v1/fluxocaixa", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
      });

      test("Deverá adicionar um item fluxocaixa e efetuar apenas a troca (data_inserção) por id item fluxocaixa", async () => {
        const itemCriado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxocaixaCriado);

        const idItemCriado = itemCriado.body.id;

        const dataEsperada = "2023-06-29T16:15:39.000Z";
        const dataEditadaInsercao = await request(app)
          .patch(`/api/v1/fluxocaixa/${idItemCriado}`)
          .set("auth", token)
          .send({
            data_insersao: dataEsperada,
          });

        const esperado = dataEditadaInsercao.body;
        expect(dataEditadaInsercao.statusCode).toEqual(200);
        expect(esperado).toHaveProperty("data_insersao", dataEsperada);
      });
    });
  });
}
