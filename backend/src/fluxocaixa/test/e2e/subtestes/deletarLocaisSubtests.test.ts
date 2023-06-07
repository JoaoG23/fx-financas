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

export function deletarLocaisSubtests() {
  describe("DELETE /api/v1/locais", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando id for enviado após local ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaLocais();
      });

      test("Deverá deletar um local por id e retorná-lo com sucesso", async () => {
        const criado = await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(localCriado);

        const idLocal = criado.body.id;

        const retorno = await request(app)
          .delete(`/api/v1/locais/${idLocal}`)
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "BRADESCO");
        expect(resposta).toHaveProperty("usuariosId", null);
      });
    });
  });
}
