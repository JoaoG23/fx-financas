import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { subelementoCriado } from "../../mock/subelementoCriado";

import { limparTabelaSubelementos } from "../../utils/limparTabelaSubelementos";
import { limparTabelaElementos } from "../../../../elementos/tests/utils/limparTabelaElementos";

const logado = {
  id: "id-elemento-test",
  nome: "testado",
};

async function criarElemento() {
  const token = await autenticacao.gerarTokenSessao(logado);
  return await request(app).post(`/api/v1/elementos`).set("auth", token).send({
    desricao: "Elemento para Subelemento",
    usuariosId: null,
  });
}

export function adicionarSubelementosSubtests() {
  describe("POST /api/v1/subelementos", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("(SUCESSO) Quando dados forem enviados", () => {
      beforeEach(async () => {
        await limparTabelaSubelementos();
      });

      test("Deverá adicionar um elemento para elemento com dados enviados e retorná-lo com sucesso", async () => {
        const retorno = await request(app)
          .post(`/api/v1/subelementos`)
          .set("auth", token)
          .send(subelementoCriado);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        expect(resposta).toHaveProperty("descricao", "Subelemento Criado");
      });
    });

    describe("(SUCESSO) Quando dados forem enviados com elemento previamente criado", () => {
      beforeEach(async () => {
        await limparTabelaElementos();
        await limparTabelaSubelementos();
      });

      test("Deverá adicionar um elemento para elemento com dados enviados e retorná-lo com sucesso", async () => {
        const elemento = await criarElemento();
        const idElemento = elemento.body.id;
    

        const subelementosComElementosId = {
          ...subelementoCriado,
          elementosId: 'TESTEID',
        };
    

        const retorno = await request(app)
          .post(`/api/v1/subelementos`)
          .set("auth", token)
          .send(subelementosComElementosId);

        const resposta = retorno.body;
        expect(retorno.statusCode).toEqual(201);

        // expect(resposta).toHaveProperty("descricao", "Subelemento Criado");
        // expect(resposta).toHaveProperty("elementosId", idElemento);
      });
    });
  });
}
