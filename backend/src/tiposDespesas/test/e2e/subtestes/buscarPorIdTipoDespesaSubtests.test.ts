import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";
import { limparTabelaTiposDespesas } from "../../utils/limparTabelaTiposDespesas";
import { tipoDespesaCriado } from "../../mock/tipoDespesaCriado";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

export function buscarPorIdTipoDespesaSubtests() {
  describe("GET /api/v1/tipos_despesas/:id", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após tipo despesa ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaTiposDespesas();
      });

      test("Deverá ser capaz de listar um tipo despesa por id com sucesso", async () => {
        const criado = await request(app)
          .post(`/api/v1/tipos_despesas`)
          .set("auth", token)
          .send(tipoDespesaCriado);

        const idTipoDespesa = criado.body.id;

        const retorno = await request(app)
        .get(`/api/v1/tipos_despesas/${idTipoDespesa}`)
        .set("auth", token);
        
        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).not.toBe([]);
        expect(resposta).not.toBeNull();
      });
    });
  });
}
