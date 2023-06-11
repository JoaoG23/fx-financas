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

export function buscarTodosFluxocaixaSubtests() {
  describe("GET /api/v1/fluxocaixa/usuario", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após item fluxo caixa ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
        await limparTabelaUsuarios();
      });

      test("Deverá ser capaz listar 1 item por pagina retorná-lo com sucesso", async () => {
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
          .get(`/api/v1/fluxocaixa/usuario/${idUsuario}`)
          .set("auth", token);
        const resposta = retorno.body;

        const segundoItem = retorno.body[1];

        expect(retorno.statusCode).toEqual(200);
        expect(resposta).not.toStrictEqual([]);
        expect(resposta).not.toBeNull();

        expect(segundoItem).toHaveProperty("descricao", "Item de teste");
        expect(segundoItem).toHaveProperty("valor", "100");
        expect(segundoItem).toHaveProperty("data_insersao");
        expect(segundoItem).toHaveProperty("hora_insersao");
        expect(segundoItem).toHaveProperty("elementosId", null);
        expect(segundoItem).toHaveProperty("usuariosId", idUsuario);
        expect(segundoItem).toHaveProperty("locaisId", null);
        expect(segundoItem).toHaveProperty("subelementosId", null);
        expect(segundoItem).toHaveProperty("tiposId", null);
        expect(segundoItem).toHaveProperty("subtiposId", null);
      });
    });
  });
}
