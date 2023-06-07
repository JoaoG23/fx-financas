import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { limparTabelafluxocaixa } from "../../utils/limparTabelafluxocaixa";
import autenticacao from "../../../../utils/Autenticacao";

import { localCriado } from "../../mock/fluxocaixaCriado";
import { localEditado } from "../../mock/fluxocaixaEditado";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};


export function editarItemFluxocaixaSubtests() {
  describe("PUT /api/v1/fluxocaixa", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados e id forem enviado após fluxocaixa ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelafluxocaixa();
      });

      test("Deverá atualizar um local por id com dados enviados e retorná-lo com sucesso", async () => {
        const criado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(localCriado);

        const idLocal = criado.body.id;

        const retorno = await request(app)
          .put(`/api/v1/fluxocaixa/${idLocal}`)
          .set("auth", token)
          .send(localEditado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "NEXT");
        expect(resposta).toHaveProperty("usuariosId", null);
      });
    });
  });
}
