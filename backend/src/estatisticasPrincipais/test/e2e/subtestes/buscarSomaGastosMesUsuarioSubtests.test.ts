import { beforeEach, describe, expect, test } from "vitest";
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

export function buscarSomaGastosMesUsuarioSubtests() {
  describe("GET /api/v1/estatisticas/total_gasto_mes", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    // describe("(SUCESSO) Ao criar item fluxo de caixa", () => {
    //   beforeEach(async () => {
    //     await limparTabelaFluxoCaixa();
    //     await limparTabelaUsuarios();
    //   });

    //   test("Deverá ser capaz de soma total os gasto mês do usuario pelo usuariosId", async () => {
    //     const usuario = await criarUsuario();
    //     const idUsuario = usuario.body.id;

    //     await request(app).post(`/api/v1/fluxocaixa`).set("auth", token).send({
    //       descricao: "Item 1",
    //       valor: 100,
    //       data_insersao: new Date(),
    //       elementosId: null,
    //       usuariosId: idUsuario,
    //       locaisId: null,
    //       subelementosId: null,
    //       tiposId: null,
    //       subtiposId: null,
    //     });

    //     await request(app).post(`/api/v1/fluxocaixa`).set("auth", token).send({
    //       descricao: "Item 2",
    //       valor: 50,
    //       data_insersao: new Date(),
    //       elementosId: null,
    //       usuariosId: idUsuario,
    //       locaisId: null,
    //       subelementosId: null,
    //       tiposId: null,
    //       subtiposId: null,
    //     });

    //     const retorno = await request(app)
    //       .get(`/api/v1/estatisticas/total_gasto_mes/${idUsuario}`)
    //       .set("auth", token);

    //     const resposta = retorno.body;
    //     expect(retorno.statusCode).toEqual(200);

    //     expect(resposta).not.toBeNull();
    //     expect(resposta).toBe("-50");
    //   });
    // });

    describe("(SUCESSO) Ao criar item fluxo de caixa", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
        await limparTabelaUsuarios();
      });

      test.only("Deverá ser capaz retorna total de (receitas), despesas e saldo do usuariosId", async () => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;

        await request(app).post(`/api/v1/fluxocaixa`).set("auth", token).send({
          descricao: "Item 1",
          valor: 100,
          data_insersao: new Date(),
          elementosId: null,
          usuariosId: idUsuario,
          locaisId: null,
          subelementosId: null,
          tiposId: null,
          subtiposId: null,
        });

        await request(app).post(`/api/v1/fluxocaixa`).set("auth", token).send({
          descricao: "Item 2",
          valor: -50,
          data_insersao: new Date(),
          elementosId: null,
          usuariosId: idUsuario,
          locaisId: null,
          subelementosId: null,
          tiposId: null,
          subtiposId: null,
        });

        const retorno = await request(app)
          .get(`/api/v1/estatisticas/detalhes-finaceiros-mes/${idUsuario}`)
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toEqual({
          despesa: "-50",
          receita: "100",
          saldoAtual: 50,
        });
      });
    });
  });
}
