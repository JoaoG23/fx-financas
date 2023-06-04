import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { localCriado } from "../../mock/locaisCriado";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaLocais } from "../../utils/limparTabelaLocais";
import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";

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

export function buscarTodosLocaisPorUsuariosIdSubtests() {
  describe("GET /api/v1/locais", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após local ter sido criado e usuariosId ser enviado via query", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaLocais();
      });

      test("Deverá ser capaz de listar todos locais com sucesso", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;
        const localComUsuariosId = {
          ...localCriado,
          usuariosId: idUsuario,
        };

        await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(localComUsuariosId);

        const retorno = await request(app)
          .get(`/api/v1/locais?usuariosId=${idUsuario}`)
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).not.toStrictEqual([]);
        expect(resposta).not.toBeNull();
      });
    });
    describe("(ERRO) Quando após local ter sido criado e usuariosId não ser enviado via query", () => {
      beforeEach(async () => {
        await limparTabelaLocais();
      });

      test.only("Não deverá ser capaz de listar local nenhum", async () => {

        const idUsuario = '';
        const localComUsuariosId = {
          ...localCriado,
          usuariosId: idUsuario,
        };

        await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(localComUsuariosId);

        const retorno = await request(app)
          .get(`/api/v1/locais?usuariosId=${idUsuario}`)
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toStrictEqual([]);
      });
    });
  });
}
