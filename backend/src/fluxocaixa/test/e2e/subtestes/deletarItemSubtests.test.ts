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

export function deletarItemSubTests() {
  describe("DELETE /api/v1/fluxocaixa", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaFluxoCaixa();
      });

      test("Deverá deletar o item criado por (idItemFluxocaixa) em seguidar buscar o ultimo item criado e validar todos campos estão corretos", async () => {
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

        await request(app)
          .delete(`/api/v1/fluxocaixa/${idItemCriado}`)
          .set("auth", token)
          .send(itemFluxocaixaEditado);

        const retorno = await request(app)
          .get(`/api/v1/fluxocaixa/usuario/${idUsuario}`)
          .set("auth", token);

        const ultimoItem = retorno.body.length - 1;

        const resposta = retorno.body[ultimoItem];
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "Saldo inicial");
        expect(resposta).toHaveProperty("valor", "0");
        expect(resposta).toHaveProperty("saldo", "0");
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

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado e 2 item serem criados no fluxo caixa", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaFluxoCaixa();
      });

      test("Deverá deletar o item criado por (idItemFluxocaixa) em seguidar buscar o ultimo item criado e validar se (saldoAtual) está correto", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;
        const itemFluxocaixaComUsuariosId = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };

        await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxocaixaComUsuariosId);

        const itemCriado = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(itemFluxocaixaComUsuariosId);

        let idItemCriado = itemCriado.body.id;

        await request(app)
          .delete(`/api/v1/fluxocaixa/${idItemCriado}`)
          .set("auth", token)
          .send(itemFluxocaixaEditado);

        const retorno = await request(app)
          .get(`/api/v1/fluxocaixa/usuario/${idUsuario}`)
          .set("auth", token);

        const ultimoItem = retorno.body.length - 1;

        const resposta = retorno.body[ultimoItem];
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "Item de teste");
        expect(resposta).toHaveProperty("saldo", "100");
        expect(resposta).toHaveProperty("usuariosId", idUsuario);
      });
    });
  });
}
