import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaTiposDespesas } from "../../utils/limparTabelaTiposDespesas";

import { tipoDespesaEditado } from "../../mock/tipoDespesaEditado";
import { tipoDespesaCriado } from "../../mock/tipoDespesaCriado";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

export function editarTipoDespesaSubtests() {
  describe("PUT /api/v1/tipos_despesas", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados e id forem enviado após (tipo de despesa) ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaTiposDespesas();
      });

      test("Deverá atualizar um (tipo de despesa) por id com dados enviados e retorná-lo com sucesso", async () => {
        const criado = await request(app)
          .post(`/api/v1/tipos_despesas`)
          .set("auth", token)
          .send(tipoDespesaCriado);

        const idTipoDespesa = criado.body.id;

        const retorno = await request(app)
          .put(`/api/v1/tipos_despesas/${idTipoDespesa}`)
          .set("auth", token)
          .send(tipoDespesaEditado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "Debito");
      });
    });
  });
}
