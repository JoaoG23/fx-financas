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

export function adicionarTipoDespesaSubtests() {
  describe("POST /api/v1/tipos_despesas", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados", () => {
      beforeEach(async () => {
        await limparTabelaTiposDespesas();
      });

      test("Deverá registrar um local para usuario com dados enviados e retorná-lo com sucesso", async () => {
        const retorno = await request(app)
          .post(`/api/v1/tipos_despesas`)
          .set("auth", token)
          .send(tipoDespesaCriado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(200);

        expect(resposta).toHaveProperty("descricao", "Credito");
      });
    });
  });
}
