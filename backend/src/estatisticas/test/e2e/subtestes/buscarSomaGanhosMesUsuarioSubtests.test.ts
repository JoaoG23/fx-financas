import { beforeEach, describe,  expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";
import { limparTabelaFluxoCaixa } from "../../utils/limparTabelaFluxoCaixa";

import {
  item1FluxocaixaCriado,
  item2FluxocaixaCriado,
} from "../../mock/fluxocaixasCriado";

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

export function buscarSomaGanhosMesUsuarioSubtests() {
  describe("GET /api/v1/estatisticas/total_ganhos_mes", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após item fluxo de caixa ter sido criado", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
        await limparTabelaUsuarios();
      });

      test("Deverá ser capaz somar todos valor ganho do mês", async (done:any) => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;

        const item1FluxocaixaComUsuariosId = {
          ...item1FluxocaixaCriado,
          usuariosId: idUsuario,
        };

        const item2FluxocaixaComUsuariosId = {
          ...item2FluxocaixaCriado,
          usuariosId: idUsuario,
        };
        
        const criarUmItem = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(item1FluxocaixaComUsuariosId);

        const criarDoisItem = await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send(item2FluxocaixaComUsuariosId);

        const retorno = await request(app)
          .get(`/api/v1/estatisticas/total_ganhos_mes/${idUsuario}`)
          .set("auth", token);

        const resposta = retorno.body;
        await expect(retorno.statusCode).toEqual(200);

        await expect(resposta).not.toBeNull();
        await expect(resposta).toBe("100");

      });
    });
  });
}
