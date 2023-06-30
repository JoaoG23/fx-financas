import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaFluxoCaixa } from "../../utils/limparTabelaFluxoCaixa";

import { itemFluxocaixaCriado } from "../../mock/fluxocaixasCriado";

import { itemFluxocaixaEditado } from "../../mock/fluxocaixasEditado";

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

export function editarItemSubtests() {
  describe("PUT /api/v1/fluxocaixa", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

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

        const itemCriado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxocaixaComUsuariosId);

        let idItemCriado = itemCriado.body.id;

        const retorno = await request(app)
          .put(`/api/v1/fluxocaixa/${idItemCriado}`)
          .set("auth", token)
          .send(itemFluxocaixaEditado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "EDITADO");
        expect(resposta).toHaveProperty("valor", "40");
        expect(resposta).toHaveProperty("data_insersao");
        expect(resposta).toHaveProperty("elementosId", null);
        expect(resposta).toHaveProperty("usuariosId", idUsuario);
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

      test("Deverá editar o item criado por idItemFluxocaixa em seguidar buscar o ultimo criado", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;
        const itemFluxocaixaComUsuariosId = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };

        const itemCriado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxocaixaComUsuariosId);

        let idItemCriado = itemCriado.body.id;

        const editarItem = await request(app)
          .put(`/api/v1/fluxocaixa/${idItemCriado}`)
          .set("auth", token)
          .send(itemFluxocaixaEditado);

        const retorno = await request(app)
          .get(`/api/v1/fluxocaixa/usuario/${idUsuario}`)
          .set("auth", token);

        const resposta = retorno.body[1];
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "EDITADO");
        expect(resposta).toHaveProperty("valor", "40");
        expect(resposta).toHaveProperty("saldo", "40");
        expect(resposta).toHaveProperty("data_insersao");
      });
    });
  });
}
