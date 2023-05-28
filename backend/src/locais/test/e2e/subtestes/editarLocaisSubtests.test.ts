import { afterEach, beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";
import { localCriado } from "../../mock/locaisCriado";

import { limparTabelaLocais } from "../../utils/limparTabelaLocais";
import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";

import autenticacao from "../../../../utils/Autenticacao";
import { localEditado } from "../../mock/locaisEditado";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};


export function editarLocaisSubtests() {
  describe("PUT /api/v1/locais", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados e id forem enviado após local ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaLocais();
      });

      test("Deverá atualizar um local por id com dados enviados e retorná-lo com sucesso", async () => {
        const criado = await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(localCriado);

        const idLocal = criado.body.id;

        const retorno = await request(app)
          .put(`/api/v1/locais/${idLocal}`)
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
