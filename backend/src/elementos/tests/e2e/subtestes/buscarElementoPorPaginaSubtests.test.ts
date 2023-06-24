import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";
import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaElementos } from "../../utils/limparTabelaElementos";
import { elementoCriado } from "../../mock/elementoCriado";

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

export function buscarPaginaTodosElementosSubtests() {
  describe("GET /api/v1/elementos/paginas", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após elemento ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaElementos();
        await limparTabelaUsuarios();
      });

      test.only("Deverá ser capaz listar 1 elemento item por pagina retorná-lo com sucesso", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;
        const elementoCriadoComIdUsuario = {
          ...elementoCriado,
          usuariosId: idUsuario,
        };

        await request(app)
          .post(`/api/v1/elementos`)
          .set("auth", token)
          .send(elementoCriadoComIdUsuario);

        const numeroPagina = 1;
        const quantidadeItemPagina = 1;
        const retorno = await request(app)
          .get(
            `/api/v1/elementos/usuarios/paginas?numero_pagina=${numeroPagina}&quantidade_items_pagina=${quantidadeItemPagina}&usuariosId=${idUsuario}`
          )
          .set("auth", token);

        const itemsPagina = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(itemsPagina).not.toStrictEqual([]);
        expect(itemsPagina).not.toBeNull();
      });
    });
  });
}
