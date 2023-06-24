import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaElementos } from "../../utils/limparTabelaElementos";

import { elementoCriado } from "../../mock/elementoCriado";
import { elementoCriado } from "../../mock/elementoCriado";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

async function criarUsuario() {
  return await request(app).post(`/api/v1/registrar`).send({
    nome: "tito",
    username: "tito",
    senha: "tito",
    email: "tito@admin.com",
    telefone: "(31)99999-99999",
  });
}

export function deletarElementoSubTests() {
  describe("DELETE /api/v1/elementos", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaElementos();
      });

      test("Deverá deletar o elemento criado por (id) e retorna-lo na API", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;
        const elementoComUsuariosId = {
          ...elementoCriado,
          usuariosId: idUsuario,
        };

        const novoElemento = await request(app)
          .post(`/api/v1/elementos`)
          .set("auth", token)
          .send(elementoComUsuariosId);

        let idElementoCriado = novoElemento.body.id;

        await request(app)
          .delete(`/api/v1/elementos/${idElementoCriado}`)
          .set("auth", token)
          .send(elementoCriado);

        const retorno = await request(app)
          .get(`/api/v1/elementos/usuario/${idUsuario}`)
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);
        expect(resposta).toEqual([]);
        expect(resposta).not.toBeNull();
      });
    });
  });
}
