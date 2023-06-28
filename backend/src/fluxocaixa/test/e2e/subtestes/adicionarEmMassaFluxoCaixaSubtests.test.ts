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

export function adicionarEmMassaFluxoCaixaSubtests() {
  describe("POST /api/v1/fluxocaixa", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados com usuario previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaUsuarios();
        await limparTabelaFluxoCaixa();
      });

      test("Deverá adicionar um array com 4 item de uma só vez", async () => {
        const usuario = await criarUsuario();

        const idUsuario = usuario.body.id;

        const item1ComUsuariosId = {
          ...itemFluxocaixaCriado,
          usuariosId: idUsuario,
        };

        const array4ItemAdicionados = [
            item1ComUsuariosId,
            item1ComUsuariosId,
            item1ComUsuariosId,
            item1ComUsuariosId
        ]
        const retorno = await request(app)
          .post(`/api/v1/fluxocaixa/massa`)
          .set("auth", token)
          .send(array4ItemAdicionados);


        expect(retorno.statusCode).toEqual(201);
        expect(retorno.body).toBe('4 itens foram cadastrados com sucesso');

      });
    });
  });
}
