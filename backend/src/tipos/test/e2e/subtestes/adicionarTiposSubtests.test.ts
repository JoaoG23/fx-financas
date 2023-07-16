import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { tipoCriado } from "../../mock/tipoCriado";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaTipos } from "../../utils/limparTabelaTipos";
import autenticacao from "../../../../utils/Autenticacao";

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

export function adicionarTiposSubtests() {
  describe("POST /api/v1/tipos", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados", () => {
      beforeEach(async () => {
        await limparTabelaTipos();
      });

      test("Deverá registrar um tipo para usuário com dados enviados e retorná-lo com sucesso", async () => {
        const retorno = await request(app)
          .post(`/api/v1/tipos`)
          .set("auth", token)
          .send(tipoCriado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        expect(resposta).toHaveProperty("descricao", "BRADESCO");
        expect(resposta).toHaveProperty("usuariosId", null);
      });
    });

    describe("(SUCESSO) Quando dados forem enviados com usuário previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaTipos();
      });

      test("Deverá registrar um tipo para usuário com dados enviados e retorná-lo com sucesso", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;
        const tipoComUsuariosId = {
          ...tipoCriado,
          usuariosId: idUsuario,
        };

        const retorno = await request(app)
          .post(`/api/v1/tipos`)
          .set("auth", token)
          .send(tipoComUsuariosId);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        expect(resposta).toHaveProperty("descricao", "BRADESCO");
        expect(resposta).toHaveProperty("usuariosId", idUsuario);
      });
    });
  });
}
