import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { localCriado } from "../../mock/locaisCriado";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaLocais } from "../../utils/limparTabelaLocais";
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

export function adicionarLocaisSubtests() {
  describe("POST /api/v1/locais", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados", () => {
      beforeEach(async () => {
        await limparTabelaLocais();
      });

      test("Deverá registrar um local para usuario com dados enviados e retorná-lo com sucesso", async () => {
        const retorno = await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(localCriado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "BRADESCO");
        expect(resposta).toHaveProperty("usuariosId", null);
      });
    });

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaLocais();
      });

      test("Deverá registrar um local para usuario com dados enviados e retorná-lo com sucesso", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;
        const local = {
          ...localCriado,
          usuariosId: idUsuario,
        };

        const retorno = await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(local);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "BRADESCO");
        expect(resposta).toHaveProperty("usuariosId", idUsuario);
      });
    });
  });
}
