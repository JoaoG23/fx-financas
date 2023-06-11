import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaFluxoCaixa } from "../../utils/limparTabelaFluxoCaixa";

import { itemFluxocaixaCriado } from "../../mock/fluxocaixasCriado";

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

export function adicionarItemFluxoCaixaSubtests() {
  describe("POST /api/v1/fluxocaixa", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
      });

      test("Deverá registrar um item fluxo de caixa para usuario com dados enviados e retorná-lo com sucesso", async () => {
        const retorno = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxocaixaCriado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        expect(resposta).toHaveProperty("descricao", "Item de teste");
        expect(resposta).toHaveProperty("valor", "100");
        expect(resposta).toHaveProperty("data_insersao");
        expect(resposta).toHaveProperty("hora_insersao");
        expect(resposta).toHaveProperty("elementosId", null);
        expect(resposta).toHaveProperty("usuariosId", null);
        expect(resposta).toHaveProperty("locaisId", null);
        expect(resposta).toHaveProperty("subelementosId", null);
        expect(resposta).toHaveProperty("tiposId", null);
        expect(resposta).toHaveProperty("subtiposId", null);
      });
    });

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaFluxoCaixa();
      });

      test("Deverá registrar um item Fluxocaixa para usuario com dados enviados e retorná-lo com sucesso", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;

        const itemFluxocaixaComUsuariosId = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };

        const retorno = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxocaixaComUsuariosId);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        expect(resposta).toHaveProperty("descricao", "Item de teste");
        expect(resposta).toHaveProperty("valor", "100");
        expect(resposta).toHaveProperty("data_insersao");
        expect(resposta).toHaveProperty("hora_insersao");
        expect(resposta).toHaveProperty("elementosId", null);
        expect(resposta).toHaveProperty("usuariosId", idUsuario);
        expect(resposta).toHaveProperty("locaisId", null);
        expect(resposta).toHaveProperty("subelementosId", null);
        expect(resposta).toHaveProperty("tiposId", null);
        expect(resposta).toHaveProperty("subtiposId", null);
      });
    });
  });
}
