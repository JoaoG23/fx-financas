import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaTiposDespesas } from "../../utils/limparTabelaTiposDespesas";

import { tipoDespesaCriado } from "../../mock/tipoDespesaCriado";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

export function buscarPaginaTodosTiposDespesaSubtests() {
  describe("GET /api/v1/locais/paginas", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após tipo de despesa ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaTiposDespesas();
      });

      test("Deverá ser capaz listar 1 tipoDespesa item por pagina retorná-lo com sucesso", async () => {
        const numeroPagina = 1;
        const quantidadeItemPagina = 1;

        const criado = await request(app)
          .post(`/api/v1/locais`)
          .set("auth", token)
          .send(tipoDespesaCriado);

        const retorno = await request(app)
          .get(
            `/api/v1/locais/paginas?numero_pagina=${numeroPagina}&quantidade_items_pagina=${quantidadeItemPagina}`
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
