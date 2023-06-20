import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

import { elementoCriado } from "../../mock/elementoCriado";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaElementos } from "../../utils/limparTabelaElementos";

const logado = {
  id: "id-usuario-test",
  nome: "testado",
};

async function criarPrimeiroUsuario() {
  return await request(app).post(`/api/v1/registrar`).send({
    nome: "tito",
    username: "tito",
    senha: "tito",
    email: "tito@admin.com",
    telefone: "(31)99999-99999",
  });
}

async function criarSegundoUsuario() {
  return await request(app).post(`/api/v1/registrar`).send({
    nome: "algusto",
    username: "algusto",
    senha: "algusto",
    email: "algusto@algusto.com",
    telefone: "(31)99999-99999",
  });
}

async function criarElementoParaPrimeiroUsuario(usuariosId: string) {
  const token = await autenticacao.gerarTokenSessao(logado);

  return await request(app).post(`/api/v1/elementos`).set("auth", token).send({
    descricao: "PRIMEIRO USUARIO ELEMENTO",
    usuariosId: usuariosId,
  });
}

async function criarElementoParaSegundoUsuario(usuariosId: string) {
  const token = await autenticacao.gerarTokenSessao(logado);

  return await request(app).post(`/api/v1/elementos`).set("auth", token).send({
    descricao: "SEGUNDO USUARIO ELEMENTO",
    usuariosId: usuariosId,
  });
}

export function buscarElementosPorUsuariosIdSubtests() {
  describe("GET /api/v1/elementos/usuario/:usuariosId", async () => {
    const token = await autenticacao.gerarTokenSessao(logado);

    describe("SUCESSO", () => {
      describe("Quando id de usuário for enviado", () => {
        beforeEach(async () => {
          await limparTabelaElementos();
          await limparTabelaUsuarios();
        });

        test.only("Deverá retorna lista elementos cujo tenha usuariosId", async () => {
          const usuario = await criarPrimeiroUsuario();
          const idUsuario = usuario.body.id;

          await criarElementoParaPrimeiroUsuario(idUsuario);

          const retorno = await request(app)
            .get(`/api/v1/elementos/usuario/${idUsuario}`)
            .set("auth", token);

          const resposta = retorno.body;
          expect(retorno.statusCode).toEqual(200);
          expect(resposta).not.toEqual({});
          expect(resposta).not.toEqual([]);
        });
      });

      describe(`
      Quando dois usuários distintos e dois
      elementos distintos forem criado 
      para cada um deles.
      `, () => {
        beforeEach(async () => {
          await limparTabelaElementos();
          await limparTabelaUsuarios();
        });

        test.only(`
        Deverá criar uma
        lista para cada um deles
        e retorna os (elementos)
        dos respectivos usuários
        (sem mistutra).
        `, async () => {
          const primeiro = await criarPrimeiroUsuario();
          const idPrimeiroUsuario = primeiro.body.id;

          const segundo = await criarSegundoUsuario();
          const idSegundoUsuario = segundo.body.id;

          await criarElementoParaPrimeiroUsuario(idPrimeiroUsuario);
          await criarElementoParaSegundoUsuario(idSegundoUsuario);

          const retornoPrimeiroUsuario = await request(app)
            .get(`/api/v1/elementos/usuario/${idPrimeiroUsuario}`)
            .set("auth", token);
          expect(retornoPrimeiroUsuario.statusCode).toEqual(200);

          const retornoSegundoUsuario = await request(app)
            .get(`/api/v1/elementos/usuario/${idSegundoUsuario}`)
            .set("auth", token);
          expect(retornoSegundoUsuario.statusCode).toEqual(200);

          const respostaPrimeiro = retornoPrimeiroUsuario.body;
          expect(respostaPrimeiro).toHaveLength(1);
          expect(respostaPrimeiro[0]).toHaveProperty(
            "descricao",
            "PRIMEIRO USUARIO ELEMENTO"
          );

          const respostaSegundo = retornoSegundoUsuario.body;

          expect(respostaSegundo).toHaveLength(1);
          expect(respostaSegundo[0]).toHaveProperty(
            "descricao",
            "SEGUNDO USUARIO ELEMENTO"
          );
        });
      });
    });
  });
}
