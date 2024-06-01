import { afterAll, beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../app";

import autenticacao from "../../utils/Autenticacao";

import { limparTodasProgramacao } from "./utils/limparTodosprogramacaofluxocaixa";

import { ProgramacaoFluxocaixaCriadoDto } from "../programacaofluxocaixa.dto/Programacaofluxocaixa.dto";
import { limparTabelaUsuarios } from "../../usuarios/tests/utils/limparTabelaUsuarios";
import { afterEach } from "node:test";

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

async function criarProgramacaoUsuario(usuarioId: string) {
  const token = await autenticacao.gerarTokenSessao(logado);

  const programacaoParaUsuario: ProgramacaoFluxocaixaCriadoDto = {
    descricao: "Entrada 1",
    valor: 50,
    elementosId: null,
    locaisId: null,
    subelementosId: null,
    tiposId: null,
    subtiposId: null,
    ativo: false,
    usuariosId: usuarioId,
  };

  return await request(app)
    .post(`/api/v1/programacao`)
    .set("auth", token)
    .send(programacaoParaUsuario);
}

describe("Routes", async () => {
  afterAll(async () => {
    await limparTodasProgramacao();
    await limparTabelaUsuarios();
  });

  describe("POST /programacao", async () => {
    beforeEach(async () => {
      await limparTodasProgramacao();
      await limparTabelaUsuarios();
    });

    test("Deverá criar programacao para usuário", async () => {
      const token = await autenticacao.gerarTokenSessao(logado);
      const usuario = await criarUsuario();
      const idUsuario = usuario.body.id;

      const programacaoParaUsuario: ProgramacaoFluxocaixaCriadoDto = {
        descricao: "Item 1",
        valor: 50,
        elementosId: null,
        locaisId: null,
        subelementosId: null,
        tiposId: null,
        subtiposId: null,
        ativo: false,
        usuariosId: idUsuario,
      };

      const retorno = await request(app)
        .post(`/api/v1/programacao`)
        .set("auth", token)
        .send(programacaoParaUsuario);

      expect(retorno.statusCode).toEqual(200);
    });
  });

  describe("GET /programacao/usuario/:usuariosId", async () => {
    beforeEach(async () => {
      await limparTodasProgramacao();
      await limparTabelaUsuarios();
    });

    test("Deverá listar programações por id de usuario", async () => {
      const token = await autenticacao.gerarTokenSessao(logado);
      const usuario = await criarUsuario();
      const idUsuario = usuario.body.id;

      await criarProgramacaoUsuario(idUsuario);

      const resposta = await request(app)
        .get(`/api/v1/programacao/usuario/${idUsuario}`)
        .set("auth", token);

      const body = resposta.body;

      const programacaoEsperada = body[0];

      expect(resposta.statusCode).toEqual(200);
      expect(body.length).toBeGreaterThan(0);
      expect(programacaoEsperada).toHaveProperty("ativo");
    });
  });

  describe("GET /programacao/usuario/:usuariosId", async () => {
    beforeEach(async () => {
      await limparTodasProgramacao();
      await limparTabelaUsuarios();
    });

    test("Deverá listar programações por id de usuario", async () => {
      const token = await autenticacao.gerarTokenSessao(logado);
      const usuario = await criarUsuario();
      const idUsuario = usuario.body.id;

      await criarProgramacaoUsuario(idUsuario);

      const resposta = await request(app)
        .get(`/api/v1/programacao/usuario/${idUsuario}`)
        .set("auth", token);

      const body = resposta.body;

      const programacaoEsperada = body[0];

      expect(resposta.statusCode).toEqual(200);
      expect(body.length).toBeGreaterThan(0);
      expect(programacaoEsperada).toHaveProperty("ativo");
    });
  });
});
