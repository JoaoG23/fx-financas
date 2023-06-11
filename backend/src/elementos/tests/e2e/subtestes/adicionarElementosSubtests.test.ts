import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { elementoCriado } from "../../mock/elementoCriado";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaElementos } from "../../utils/limparTabelaElementos";

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

export function adicionarElementosSubtests() {
  describe("POST /api/v1/elementos", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados", () => {
      beforeEach(async () => {
        await limparTabelaElementos();
      });

      test("Deverá adicionar um elemento para usuario com dados enviados e retorná-lo com sucesso", async () => {
        const retorno = await request(app)
          .post(`/api/v1/elementos`)
          .set("auth", token)
          .send(elementoCriado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        expect(resposta).toHaveProperty("descricao", "Elemento Criado");
      });
    });

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaElementos();
      });

      test("Deverá adicionar um elemento para usuario com dados enviados e retorná-lo com sucesso", async () => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;

        const elementosComUsuariosId = {
          ...elementoCriado,
          usuariosId: idUsuario,
        };

        const retorno = await request(app)
          .post(`/api/v1/elementos`)
          .set("auth", token)
          .send(elementosComUsuariosId);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        expect(resposta).toHaveProperty("descricao", "Elemento Criado");
        expect(resposta).toHaveProperty("usuariosId", idUsuario);
      });
    });
  });
}
