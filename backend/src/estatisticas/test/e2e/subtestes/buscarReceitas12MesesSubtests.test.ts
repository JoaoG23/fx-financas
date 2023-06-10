import request from "supertest";
import { beforeEach, describe, expect, test } from "vitest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { limparTabelaFluxoCaixa } from "../../utils/limparTabelaFluxoCaixa";
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

export function buscarReceitas12MesesSubtests() {
  describe("GET /api/v1/estatisticas/receitas_dozes_meses", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após 12 items para cada mês fossem criados", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
        await limparTabelaUsuarios();
      });

      test("Deverá ser capaz retorna os 12 total de receitas de cada mês, sendo que no (primeiro mês) foi recebido um valor (90 reais)", async () => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;

        await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send({
            descricao: `Item do mês`,
            valor: 40,
            data_insersao: new Date(2023, 0, 12),
            hora_insersao: new Date(),
            elementosId: null,
            usuariosId: idUsuario,
            locaisId: null,
            subelementosId: null,
            tiposId: null,
            subtiposId: null,
          });

        for (let i = 0; i < 12; i++) {
          await request(app)
            .post(`/api/v1/fluxocaixa`)
            .set("auth", token)
            .send({
              descricao: `Item do mês ${i}`,
              valor: 50,
              data_insersao: new Date(2023, i, 12),
              hora_insersao: new Date(),
              elementosId: null,
              usuariosId: idUsuario,
              locaisId: null,
              subelementosId: null,
              tiposId: null,
              subtiposId: null,
            });
        }

        const retorno = await request(app)
          .get(
            `/api/v1/estatisticas/receitas_dozes_meses?usuariosId=${idUsuario}&ano=${2023}`
          )
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).not.toBeNull();
        expect(resposta).toStrictEqual([
          { mes: 1, receitaValor: "90" },
          { mes: 2, receitaValor: "50" },
          { mes: 3, receitaValor: "50" },
          { mes: 4, receitaValor: "50" },
          { mes: 5, receitaValor: "50" },
          { mes: 6, receitaValor: "50" },
          { mes: 7, receitaValor: "50" },
          { mes: 8, receitaValor: "50" },
          { mes: 9, receitaValor: "50" },
          { mes: 10, receitaValor: "50" },
          { mes: 11, receitaValor: "50" },
          { mes: 12, receitaValor: "50" },
        ]);
      });
    });
  });
}
