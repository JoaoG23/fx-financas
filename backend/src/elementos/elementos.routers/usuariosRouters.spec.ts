import request from "supertest";
import app from "../../app";
import { limparTabelaUsuarios } from "../tests/utils/limparTabelaUsuarios";
import { usuarioCriado, usuarioEditado } from "../tests/seeds/usuarios";

describe("Routers usuarios", () => {
  beforeEach(async () => {
    await limparTabelaUsuarios();
  });
  describe("GET /api/v2/usuarios", () => {
    afterEach(async () => {
      await limparTabelaUsuarios();
    });
    test("Lista todos usuarios", async () => {
      await request(app).post(`/api/v2/usuarios`).send(usuarioCriado);

      const resposta = await request(app).get(`/api/v2/usuarios`);

      expect(resposta.statusCode).toEqual(200);
      expect(resposta.body).not.toBeNull();
      expect(resposta.body).not.toStrictEqual([]);
    });
  });

  describe("POST /api/v2/usuarios", () => {
    afterEach(async () => {
      await limparTabelaUsuarios();
    });
    test("Criar um usuarios se não existe", async () => {
      const { body: criar, statusCode } = await request(app)
        .post(`/api/v2/usuarios`)
        .send(usuarioCriado);

      expect(statusCode).toEqual(201);
      expect(criar).not.toBeNull();
      expect(criar).toHaveProperty("id_usuario", "admin");
      expect(criar).toHaveProperty("login_nome", "admin");
      expect(criar).toHaveProperty("email", "admin@admin.com");
      expect(criar).toHaveProperty("nome", "Adminstrador");
      expect(criar).toHaveProperty("senha", "admin");
      expect(criar).toHaveProperty("status", "1");
      expect(criar).toHaveProperty("id_perfil", "admin");
    });
  });

  describe("GET /api/v2/usuarios/id_usuario", () => {
    afterEach(async () => {
      await limparTabelaUsuarios();
    });
    test("Criar um usuarios e listar ele pelo id_usuarios", async () => {
      await request(app).post(`/api/v2/usuarios`).send(usuarioCriado);

      const idusuarios = "admin";
      const { statusCode, body: listarUm } = await request(app).get(
        `/api/v2/usuarios/${idusuarios}`
      );

      expect(statusCode).toEqual(200);
      expect(listarUm).toHaveProperty("id_usuario", "admin");
      expect(listarUm).toHaveProperty("login_nome", "admin");
      expect(listarUm).toHaveProperty("email", "admin@admin.com");
      expect(listarUm).toHaveProperty("nome", "Adminstrador");
      expect(listarUm).toHaveProperty("senha", "admin");
      expect(listarUm).toHaveProperty("status", "1");
      expect(listarUm).toHaveProperty("id_perfil", "admin");
    });
  });

  describe("GET /api/v2/usuarios/paginas", () => {
    afterEach(async () => {
      await limparTabelaUsuarios();
    });
    test("Criar um usuarios e listar ele pelo id_usuarios", async () => {
      await request(app).post(`/api/v2/usuarios`).send(usuarioCriado);

      const { statusCode, body } = await request(app)
        .get(`/api/v2/usuarios/paginas`)
        .query({ numero_pagina: "1", quantidade_items_pagina: "10" });

      expect(statusCode).toEqual(200);
      expect(body).not.toBeNull();
      expect(body).not.toStrictEqual([]);
    });
  });

  describe("PUT /api/v2/usuarios", () => {
    afterEach(async () => {
      await limparTabelaUsuarios();
    });
    test("Deveria criar e editar um usuário pelo id_usuarios", async () => {
      const { body: criar, statusCode } = await request(app)
        .post(`/api/v2/usuarios`)
        .send(usuarioCriado);

      expect(statusCode).toEqual(201);
      expect(criar).not.toBeNull();
      expect(criar).toHaveProperty("id_usuario", "admin");
      expect(criar).toHaveProperty("login_nome", "admin");
      expect(criar).toHaveProperty("email", "admin@admin.com");
      expect(criar).toHaveProperty("nome", "Adminstrador");
      expect(criar).toHaveProperty("senha", "admin");
      expect(criar).toHaveProperty("status", "1");
      expect(criar).toHaveProperty("id_perfil", "admin");

      const id_usuario = "admin";
      const { body: editar, statusCode: statusEditado } = await request(app)
        .put(`/api/v2/usuarios/${id_usuario}`)
        .send(usuarioEditado);

      expect(editar).toHaveProperty("login_nome", "tester");
      expect(editar).toHaveProperty("email", "tester@tester.com");
      expect(editar).toHaveProperty("nome", "Analistar de Testes");
      expect(editar).toHaveProperty("senha", "tester");
      expect(editar).toHaveProperty("status", "0");
      expect(editar).toHaveProperty("id_perfil", "tester");
      expect(statusEditado).toEqual(200);
    });
  });

  describe("DELETE /api/v2/usuarios/id", () => {
    afterEach(async () => {
      await limparTabelaUsuarios();
    });
    test("Deveria criar e deletar um usuário pelo id_usuarios", async () => {
      const { body: criar, statusCode } = await request(app)
        .post(`/api/v2/usuarios`)
        .send(usuarioCriado);

      expect(statusCode).toEqual(201);
      expect(criar).not.toBeNull();

      const id_usuario = "admin";
      const { body: deletar, statusCode: statusEditado } = await request(
        app
      ).delete(`/api/v2/usuarios/${id_usuario}`);

      expect(statusEditado).toEqual(200);
      expect(deletar).toHaveProperty("id_usuario", "admin");
      expect(deletar).toHaveProperty("login_nome", "admin");
      expect(deletar).toHaveProperty("email", "admin@admin.com");
      expect(deletar).toHaveProperty("nome", "Adminstrador");
      expect(deletar).toHaveProperty("senha", "admin");
      expect(deletar).toHaveProperty("status", "1");
      expect(deletar).toHaveProperty("id_perfil", "admin");
    });
  });
});
