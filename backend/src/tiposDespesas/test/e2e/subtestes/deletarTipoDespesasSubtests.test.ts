import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { limparTabelaTiposDespesas } from '../../utils/limparTabelaTiposDespesas'

import { tipoDespesaCriado } from '../../mock/tipoDespesaCriado'

import autenticacao from "../../../../utils/Autenticacao";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

export function deletarTipoDespesaSubtests() {
  describe("DELETE /api/v1/TipoDespesa", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando id for enviado após tipo despesa ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaTiposDespesas();
      });

      test("Deverá deletar um tipo despesa por id e retorná-lo com sucesso", async () => {
        const criado = await request(app)
          .post(`/api/v1/tipos_despesas`)
          .set("auth", token)
          .send(tipoDespesaCriado);

        const idTipoDespesa = criado.body.id;

        const retorno = await request(app)
          .delete(`/api/v1/tipos_despesas/${idTipoDespesa}`)
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "Credito");
      });
    });
  });
}
