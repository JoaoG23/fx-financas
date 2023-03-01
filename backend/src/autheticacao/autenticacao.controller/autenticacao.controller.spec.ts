import request from "supertest";
import app from "../../app";
import { limparTabe1 } from "../tests/utils/limparTabe1";
import { usuarioCriado, usuarioEditado } from "../tests/seed1";

describe("Router1", () => {
  describe("GET /api/v1", () => {
    afterEach(async () => {
      await limparTabe1();
    });
    test("Lista todo1", async () => {
      await request(app).post(`/api/v1`).send(usuarioCriado);

      const resposta = await request(app).get(`/api/v1`);

      expect(resposta.statusCode).toEqual(200);
      expect(resposta.body).not.toBeNull();
      expect(resposta.body).not.toStrictEqual([]);
    });
  });

  describe("POST /api/v1", () => {
    afterEach(async () => {
      await limparTabe1();
    });
    test("Criar u1 se não existe", async () => {
      const { body: criar, statusCode } = await request(app)
        .post(`/api/v1`)
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

//   describe("GET /api/v1/id_usuario", () => {
//     afterEach(async () => {
//       await limparTabe1();
//     });
//     test("Criar u1 e listar ele pelo i1", async () => {
//       await request(app).post(`/api/v1`).send(usuarioCriado);

//       const 1 = "admin";
//       const { statusCode, body: listarUm } = await request(app).get(
//         `/api/v1/${1}`
//       );

//       expect(statusCode).toEqual(200);
//       expect(listarUm).toHaveProperty("id_usuario", "admin");
//       expect(listarUm).toHaveProperty("login_nome", "admin");
//       expect(listarUm).toHaveProperty("email", "admin@admin.com");
//       expect(listarUm).toHaveProperty("nome", "Adminstrador");
//       expect(listarUm).toHaveProperty("senha", "admin");
//       expect(listarUm).toHaveProperty("status", "1");
//       expect(listarUm).toHaveProperty("id_perfil", "admin");
//     });
//   });

//   describe("GET /api/v1/paginas", () => {
//     afterEach(async () => {
//       await limparTabe1();
//     });
//     test("Criar u1 e listar ele pelo i1", async () => {
//       await request(app).post(`/api/v1`).send(usuarioCriado);

//       const { statusCode, body } = await request(app)
//         .get(`/api/v1/paginas`)
//         .query({ numero_pagina: "1", quantidade_items_pagina: "10" });

//       expect(statusCode).toEqual(200);
//       expect(body).not.toBeNull();
//       expect(body).not.toStrictEqual([]);
//     });
//   });

//   describe("PUT /api/v1", () => {
//     afterEach(async () => {
//       await limparTabe1();
//     });
//     test("Deveria criar e editar um usuário pelo i1", async () => {
//       const { body: criar, statusCode } = await request(app)
//         .post(`/api/v1`)
//         .send(usuarioCriado);

//       expect(statusCode).toEqual(201);
//       expect(criar).not.toBeNull();
//       expect(criar).toHaveProperty("id_usuario", "admin");
//       expect(criar).toHaveProperty("login_nome", "admin");
//       expect(criar).toHaveProperty("email", "admin@admin.com");
//       expect(criar).toHaveProperty("nome", "Adminstrador");
//       expect(criar).toHaveProperty("senha", "admin");
//       expect(criar).toHaveProperty("status", "1");
//       expect(criar).toHaveProperty("id_perfil", "admin");

//       const id_usuario = "admin";
//       const { body: editar, statusCode: statusEditado } = await request(app)
//         .put(`/api/v1/${id_usuario}`)
//         .send(usuarioEditado);

//       expect(editar).toHaveProperty("login_nome", "tester");
//       expect(editar).toHaveProperty("email", "tester@tester.com");
//       expect(editar).toHaveProperty("nome", "Analistar de Testes");
//       expect(editar).toHaveProperty("senha", "tester");
//       expect(editar).toHaveProperty("status", "0");
//       expect(editar).toHaveProperty("id_perfil", "tester");
//       expect(statusEditado).toEqual(200);
//     });
//   });

//   describe("DELETE /api/v1/id", () => {
//     afterEach(async () => {
//       await limparTabe1();
//     });
//     test("Deveria criar e deletar um usuário pelo i1", async () => {
//       const { body: criar, statusCode } = await request(app)
//         .post(`/api/v1`)
//         .send(usuarioCriado);

//       expect(statusCode).toEqual(201);
//       expect(criar).not.toBeNull();

//       const id_usuario = "admin";
//       const { body: deletar, statusCode: statusEditado } = await request(
//         app
//       ).delete(`/api/v1/${id_usuario}`);

//       expect(statusEditado).toEqual(200);
//       expect(deletar).toHaveProperty("id_usuario", "admin");
//       expect(deletar).toHaveProperty("login_nome", "admin");
//       expect(deletar).toHaveProperty("email", "admin@admin.com");
//       expect(deletar).toHaveProperty("nome", "Adminstrador");
//       expect(deletar).toHaveProperty("senha", "admin");
//       expect(deletar).toHaveProperty("status", "1");
//       expect(deletar).toHaveProperty("id_perfil", "admin");
//     });
//   });
});
