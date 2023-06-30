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
        expect(resposta).toHaveProperty("elementosId", null);
        expect(resposta).toHaveProperty("usuariosId", null);
        expect(resposta).toHaveProperty("locaisId", null);
        expect(resposta).toHaveProperty("subelementosId", null);
        expect(resposta).toHaveProperty("tiposId", null);
        expect(resposta).toHaveProperty("subtiposId", null);
      });
    });

    describe("(SUCESSO) Quando dados forem enviados", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
      });

      test("Deverá adicionar um item fluxo de caixa e validar valor e saldo adicionado é decimal", async () => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;

        const item1ComUsuariosId = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
          valor: 10.34,
        };

        const retornoItemCriado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(item1ComUsuariosId);
        const criado = retornoItemCriado.body;
        const idItem = retornoItemCriado.body.id;
        expect(retornoItemCriado.statusCode).toEqual(201);
        expect(criado).toHaveProperty("valor", "10.34");


        const itemBuscado = await request(app)
        .get(`/api/v1/fluxocaixa/${idItem}`)
        .set("auth", token);
        
        expect(itemBuscado.statusCode).toEqual(200);
        expect(itemBuscado.body).toHaveProperty("valor", "10.34");
      });
    });

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaFluxoCaixa();
      });

      test("Deverá adição dois items de fluxocaixa em seguidar saldo atual esta correto", async () => {
        const usuario = await criarUsuario();

        const saldoAtualEsperado = "200";

        const idUsuario = usuario.body.id;

        const item1ComUsuariosId = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };
        const item2ComUsuariosId = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };

        await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(item1ComUsuariosId);

        await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(item2ComUsuariosId);

        const retorno = await request(app)
          .get(`/api/v1/fluxocaixa/usuario/${idUsuario}`)
          .set("auth", token);

        const resposta = retorno.body[2];
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("data_insersao");
        expect(resposta).toHaveProperty("elementosId", null);
        expect(resposta).toHaveProperty("usuariosId", idUsuario);
        expect(resposta).toHaveProperty("saldo", saldoAtualEsperado);
      });
    });
  });
}
