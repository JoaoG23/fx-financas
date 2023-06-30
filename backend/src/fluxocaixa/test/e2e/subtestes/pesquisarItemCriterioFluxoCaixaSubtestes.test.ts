import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { limparTabelaFluxoCaixa } from "../../utils/limparTabelaFluxoCaixa";

import { itemFluxocaixaCriado } from "../../mock/fluxocaixasCriado";

import autenticacao from "../../../../utils/Autenticacao";
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

export function pesquisarItemFluxoCaixaPorCriterioSubtestes() {
  describe("GET /api/v1/fluxocaixa/usuario/pesquisar/id", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após item fluxo caixa ter sido criado e critérios (descricao) ser enviada", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
        await limparTabelaUsuarios();
      });

      test("Deverá retorna todos os items com aquela desçricao", async () => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;
        const itemFluxoCaixaCriadoComIdUsuario = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };

        const criado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxoCaixaCriadoComIdUsuario);

        const retorno = await request(app)
          .get(`/api/v1/fluxocaixa/usuario/pesquisar`)
          .query({
            numero_pagina: 1,
            quantidade_items_pagina: 10,
            descricao: "Item de teste",
            usuariosId: idUsuario,
          })
          .set("auth", token);
        const resposta = retorno.body;

        const totalItems = retorno.body[1].length;
        const arrayItems = retorno.body[1];
        const ultimoItem = arrayItems[totalItems - 1];

        expect(retorno.statusCode).toEqual(200);
        expect(resposta).not.toStrictEqual([]);
        expect(resposta).not.toBeNull();

        expect(ultimoItem).toHaveProperty("descricao", "Item de teste");
        expect(ultimoItem).toHaveProperty("valor", "100");
        expect(ultimoItem).toHaveProperty("data_insersao");
        expect(ultimoItem).toHaveProperty("usuariosId", idUsuario);
      });
    });

    describe("(ERRO) Quando após item fluxo caixa ter sido criado e critérios (descricao) ser enviada", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
        await limparTabelaUsuarios();
      });

      test("Deverá retorna (null ou array vazio) pois não existe nenhum item para aquela descrição", async () => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;
        const itemFluxoCaixaCriadoComIdUsuario = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };

        const criado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxoCaixaCriadoComIdUsuario);

        const retorno = await request(app)
          .get(`/api/v1/fluxocaixa/usuario/pesquisar`)
          .query({
            numero_pagina: 1,
            quantidade_items_pagina: 10,
            descricao: "Chinelo de pé",
            usuariosId: idUsuario,
          })
          .set("auth", token);

        const arrayItems = retorno.body[1];

        expect(retorno.statusCode).toEqual(200);
        expect(arrayItems).toStrictEqual([]);
      });
    });
  });
}
