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

export function buscarReceitasDespesas12MesesSubtests() {
  describe("GET /api/v1/estatisticas/despesas_receitas_dozes_meses", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando após 12 items para cada mês fossem criados", () => {
      beforeEach(async () => {
        await limparTabelaFluxoCaixa();
        await limparTabelaUsuarios();
      });

      test("Deverá ser capaz retorna os 12 total de receitas de cada mês, sendo que no (primeiro mês) foi despesa um valor (40 reais)", async () => {
        const usuario = await criarUsuario();
        const idUsuario = usuario.body.id;

        await request(app)
          .post(`/api/v1/fluxocaixa`)
          .set("auth", token)
          .send({
            descricao: `Item do mês`,
            valor: -40,
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
            `/api/v1/estatisticas/despesas_receitas_dozes_meses?usuariosId=${idUsuario}&ano=${2023}`
          )
          .set("auth", token);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).not.toBeNull();
        expect(resposta).toStrictEqual([
          {
            despesa: -40,
            mes: "Janeiro",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Fevereiro",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Março",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Abril",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Maio",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Junho",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Julho",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Agosto",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Setembro",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Outubro",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Novembro",
            receita: 50,
          },
          {
            despesa: 0,
            mes: "Dezembro",
            receita: 50,
          },
        ]);
      });
    });
  });
}
