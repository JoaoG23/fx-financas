import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import { localCriado } from "../../mock/locaisCriado";

import { limparTabelaLocais } from "../../utils/limparTabelaLocais";
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

export function buscarPaginaTodosLocaisSubtests() {
  describe("GET /api/v1/locais/paginas", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após local ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaLocais();
        await limparTabelaUsuarios();
      });

      test("Deverá ser capaz listar 1 local item por pagina retorná-lo com sucesso", async () => {
        const numeroPagina = 1;
        const quantidadeItemPagina = 1;

        const usuario = await criarUsuario();
        
        const idUsuario = usuario.body.id;
        const localCriadoComIdUsuario = {
          ...localCriado,
          usuariosId: idUsuario,
        };
        
        const criado = await request(app)
        .post(`/api/v1/locais`)
        .set("auth", token)
        .send(localCriadoComIdUsuario);
        
        const retorno = await request(app)
          .get(
            `/api/v1/locais/paginas?numero_pagina=${numeroPagina}&quantidade_items_pagina=${quantidadeItemPagina}&usuariosId=${idUsuario}`
          )
          .set("auth", token);

        const itemsPagina = retorno.body[1];
        expect(retorno.statusCode).toEqual(200);

        expect(itemsPagina).not.toStrictEqual([]);
        expect(itemsPagina).not.toBeNull();
      });
    });
  });
}
