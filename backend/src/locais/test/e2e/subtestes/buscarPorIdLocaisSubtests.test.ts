import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { localCriado } from "../../mock/locaisCriado";

import { limparTabelaLocais } from "../../utils/limparTabelaLocais";
import autenticacao from "../../../../utils/Autenticacao";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

export function buscarPorIdLocaisSubtests() {
  describe("GET /api/v1/locais/:id", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após local ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaLocais();
      });

      test("Deverá ser capaz de listar um local por id com sucesso", async () => {
        const criado = await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(localCriado);

        const idLocal = criado.body.id;

        const retorno = await request(app)
        .get(`/api/v1/locais/${idLocal}`)
        .set("auth", token);
        
        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).not.toBe([]);
        expect(resposta).not.toBeNull();
      });
    });
  });
}
