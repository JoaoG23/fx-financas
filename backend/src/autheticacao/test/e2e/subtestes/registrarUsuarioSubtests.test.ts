import { afterAll, afterEach, describe, expect, test } from "vitest";
import request from "supertest";
import app from "../../../../app";
import { limparTabelaUsuarios } from "../../utils/limparTabelaUsuarios";

import {
  usuarioCriado,
  usuarioCriadoEmailDiferenteMesmoUsername,
} from "../../mock/seeds/usuarioCriado";

export function registrarUsuarioSubtests() {
  describe("POST /api/v1/registrar", () => {
    afterAll(async () => {
      await limparTabelaUsuarios();
    });

    describe("(SUCESSO) Quando dados forem enviados", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });

      test("Deverá registrar um usuário com dados enviados e retorná-lo com sucesso", async () => {
        const retorno = await request(app)
          .post(`/api/v1/registrar`)
          .send(usuarioCriado);

        const resposta = retorno.body;

        expect(retorno.statusCode).toEqual(201);
        expect(resposta).not.toBeNull();

        expect(resposta).toHaveProperty("nome", "tito");
        expect(resposta).toHaveProperty("username", "tito");
        expect(resposta).toHaveProperty("email", "tito@admin.com");
        expect(resposta).toHaveProperty("telefone", "(31)99999-99999");
      });
    });

    describe("(ERRO) Quando dados forem enviados", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });

      test("Deverá gerar um erro ao tentar cria um usuario 2 vezes com mesmo (email)", async () => {
        const usuarioPrimeiraVezCriado = await request(app)
          .post(`/api/v1/registrar`)
          .send(usuarioCriado);

        const criarMesmoUsuarioSegundaVez = await request(app)
          .post(`/api/v1/registrar`)
          .send(usuarioCriado);

        expect(criarMesmoUsuarioSegundaVez.statusCode).toEqual(409);
        expect(criarMesmoUsuarioSegundaVez.statusCode).not.toEqual(201);
        expect(criarMesmoUsuarioSegundaVez.body).toBe(
          "Esse email já está cadastrado no sistema"
        );
      });
    });

    describe("(ERRO) Quando dados forem enviados", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });

      test("Deverá gerar um erro ao tentar cria um usuario 2 vezes com mesmo (username)", async () => {
        const usuarioPrimeiraVezCriado = await request(app)
          .post(`/api/v1/registrar`)
          .send(usuarioCriado);

        const criarMesmoUsuarioSegundaVez = await request(app)
          .post(`/api/v1/registrar`)
          .send(usuarioCriadoEmailDiferenteMesmoUsername);

        expect(criarMesmoUsuarioSegundaVez.statusCode).toEqual(409);
        expect(criarMesmoUsuarioSegundaVez.statusCode).not.toEqual(201);
        expect(criarMesmoUsuarioSegundaVez.body).toBe(
          "Esse nome de usuário já existe"
        );
      });
    });
  });
}
