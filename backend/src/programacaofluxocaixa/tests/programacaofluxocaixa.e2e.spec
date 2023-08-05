import { limparTodosdadosMudados } from "./utils/limparTodosdadosMudados";

import { describe, test, expect, beforeEach, afterEach } from "vitest";
import app from "../../app";

import request from "supertest";
import { dadosMudados1Criado } from "./seeds/dadosMudados1Criado";
import { dadosMudados2Criado } from "./seeds/dadosMudados2Criado";
import { dadosMudadosDto } from "../dadosMudados.dto/dadosMudados.dto";
import { gerarTokenMocado } from "../../tests/auxiliaresGeral/gerarTokenMocado";
import { AutenticadorRotas } from "../../auth/AutenticadorRotas";
import { dadosMudados1Editado } from "./seeds/dadosMudados1Editado";

const criarItem = async (item: dadosMudadosDto) => {
  const tokenAutenticacao = await gerarTokenMocado();

  await request(app)
    .post('/api/v2/dadosMudados')
    .set("token", tokenAutenticacao)
    .send(item);
};

describe("dadosMudados", () => {
  describe("Listar todos", () => {
    describe("GET /dadosMudados", () => {
      beforeEach(async () => {
        await criarItem(dadosMudados1Criado);
        await criarItem(dadosMudados2Criado);
      });

      afterEach(async () => {
        await limparTodosdadosMudados();
      });

      describe("Quando acessar a rota", () => {
        test("Deverá ser capaz de retorna todos os item do banco de dados e status 200", async () => {
          const tokenAutenticacao = await gerarTokenMocado();
          const { statusCode, body } = await request(app)
            .get("/api/v2/dadosMudados")
            .set("token", tokenAutenticacao);

          expect(statusCode).toEqual(200);
          expect(body).not.toBeNull();
          expect(body).not.toEqual([]);

          const primeiroItemSemId = body[0];
          delete primeiroItemSemId.id;
          // Pega o primeiro dado Salvo e valida se objeto esta lá
          expect(primeiroItemSemId).toStrictEqual(dadosMudados1Criado);

          return new Promise<void>((resolve) => {
            resolve();
          });
        });
      });
    });

    describe("GET /dadosMudados/iddadosMudados", () => {
      beforeEach(async () => {
        await criarItem(dadosMudados1Criado);
      });

      afterEach(async () => {
        await limparTodosdadosMudados();
      });

      describe("Quando acessar a rota", () => {
        test("Deverá ser capaz de retorna um item referente ao id de dados", async () => {
          const tokenAutenticacao = await gerarTokenMocado();

          const iddadosMudados = "011";
          const { statusCode, body } = await request(app)
            .get('/api/v2/dadosMudados/iddadosMudados')
            .set("token", tokenAutenticacao);

          expect(statusCode).toEqual(200);
          expect(body).not.toBeNull();
          expect(body).not.toEqual([]);

          const primeiroItemSemId = body;
          delete primeiroItemSemId.id;
          // Pega o primeiro dado Salvo e valida se objeto esta lá
          expect(primeiroItemSemId).toStrictEqual(dadosMudados1Criado);
          return new Promise<void>((resolve) => {
            resolve();
          });
        });
      });
    });

    describe("GET /dadosMudados/pesquisa/", () => {
      beforeEach(async () => {
        await criarItem(dadosMudados1Criado);
      });

      afterEach(async () => {
        await limparTodosdadosMudados();
      });

      test("Pesquisar uma funcionario com todos os critério na query", async () => {
        const tokenAutenticacao = await gerarTokenMocado();

        const { body, statusCode } = await request(app)
          .get('/api/v2/dadosMudados/pesquisa')
          .query({
            iddadosMudados: "011",
            descricao: "Expedição",
          })
          .set("token", tokenAutenticacao);

        expect(statusCode).toEqual(200);
        expect(body).not.toBeNull();
        expect(body).not.toStrictEqual([]);
      });
    });

    describe("GET /dadosMudados/paginas", () => {
      beforeEach(async () => {
        await criarItem(dadosMudados1Criado);
        await criarItem(dadosMudados2Criado);
      });

      afterEach(async () => {
        await limparTodosdadosMudados();
      });

      describe("Quando acessar a rota", () => {
        test("Deverá ser capaz mostrar item por pagina", async () => {
          const tokenAutenticacao = await gerarTokenMocado();

          const primeiraPagina = 1;
          const segundaPagina = 2;
          const quantidadeItems = 1;
          const pagina1 = await request(app)
            .get(
              '/api/v2/dadosMudados/paginas?numero_pagina=primeiraPagina&quantidade_items_pagina=quantidadeItems'
            )
            .set("token", tokenAutenticacao);

          const pagina2 = await request(app)
            .get(
              '/api/v2/dadosMudados/paginas?numero_pagina=segundaPagina&quantidade_items_pagina=quantidadeItems'
            )
            .set("token", tokenAutenticacao);

          expect(pagina1.statusCode).toEqual(200);
          expect(pagina1).not.toBeNull();
          expect(pagina1).not.toEqual([]);

          expect(pagina1.statusCode).toEqual(200);
          expect(pagina2).not.toBeNull();
          expect(pagina2).not.toEqual([]);

          return new Promise<void>((resolve) => {
            resolve();
          });
        });
      });
    });

    describe("GET /dadosMudados/id", () => {
      beforeEach(async () => {
        await limparTodosdadosMudados();
      });
      test("Criar um dadosMudados e listar ele pelo iddadosMudados", async () => {
        const tokenAutenticacao = await gerarTokenMocado();

        const { body: criar } = await request(app)
          .post('/api/v2/dadosMudados')
          .set("token", tokenAutenticacao)

          .send(dadosMudados1Criado);

        expect(criar).toHaveProperty("iddadosMudados", "011");
        expect(criar).toHaveProperty("descricao", "Expedição");
        expect(criar).toHaveProperty("ativo", "1");

        const id = "011";
        const { statusCode, body: listarUm } = await request(app).get(
          '/api/v2/dadosMudados/id'
        );

        expect(statusCode).toEqual(200);
        expect(listarUm).toHaveProperty("iddadosMudados", "011");
        expect(listarUm).toHaveProperty("descricao", "Expedição");
        expect(listarUm).toHaveProperty("ativo", "1");
      });
    });

    describe("POST /dadosMudados", () => {
      beforeEach(async () => {
        await limparTodosdadosMudados();
      });

      test("Deveria tentar criar dois dadosMudados com mesmo iddadosMudados e dar erro", async () => {
        const tokenAutenticacao = await gerarTokenMocado();

        const criarUm = await request(app)
          .post('/api/v2/dadosMudados')
          .set("Accept", "application/json")
          .set("token", tokenAutenticacao)
          .send(dadosMudados1Criado);

        const criarDoisMesmoIddadosMudados = await request(app)
          .post('/api/v2/dadosMudados')
          .set("Accept", "application/json")
          .send(dadosMudados1Criado);

        expect(criarDoisMesmoIddadosMudados.statusCode).toEqual(400);
        expect(criarDoisMesmoIddadosMudados.body).not.toBeNull();
        expect(criarDoisMesmoIddadosMudados.body).toBe(
          "Erro ao criar dadosMudados: Esse iddadosMudados Já existe no sistema tente outro!"
        );
      });
    });

    describe("POST /dadosMudados", () => {
      beforeEach(async () => {
        await limparTodosdadosMudados();
      });

      test("Deveria criar um novo dadosMudados e retorna seus dados", async () => {
        const tokenAutenticacao = await gerarTokenMocado();

        const criarUm = await request(app)
          .post('/api/v2/dadosMudados')
          .set("token", tokenAutenticacao)
          .send(dadosMudados1Criado);

        delete criarUm.body.id;

        expect(criarUm.statusCode).toEqual(200);
        expect(criarUm.body).not.toBeNull();
        expect(criarUm.body).toStrictEqual(dadosMudados1Criado);
      });
    });

    describe("PUT /dadosMudados", () => {
      beforeEach(async () => {
        await limparTodosdadosMudados();
      });

      test("Deveriar criar um dadosMudados e seguida editar-lo pelo IddadosMudados", async () => {
        const tokenAutenticacao = await gerarTokenMocado();

        const { body: criar } = await request(app)
          .post('/api/v2/dadosMudados')
          .set("Accept", "application/json")
          .send(dadosMudados1Criado);

        const id = "011";
        const { statusCode, body: editar } = await request(app)
          .put('/api/v2/dadosMudados/id')
          .set("Accept", "application/json")
          .set("token", tokenAutenticacao)
          .send(dadosMudados1Editado);

        expect(statusCode).toEqual(200);
        expect(criar).toHaveProperty("iddadosMudados", "011");
        expect(criar).toHaveProperty("descricao", "Expedição");
        expect(criar).toHaveProperty("ativo", "1");

        expect(editar).toHaveProperty("descricao", "Manufatura Nova");
        expect(editar).toHaveProperty("ativo", "0");
      });
    });

    describe("DELETE /dadosMudados", () => {
      beforeEach(async () => {
        await limparTodosdadosMudados();
      });

      test("Deveria criar dadosMudados e em seguida deletar pelo IddadosMudados", async () => {
        const { body: criar } = await request(app)
          .post('/api/v2/dadosMudados')
          .set("Accept", "application/json")
          .send(dadosMudados1Criado);

        const iddadosMudados = "011";
        const { statusCode, body: deletar } = await request(app).delete(
          '/api/v2/dadosMudados/id'
        );

        expect(criar).toHaveProperty("iddadosMudados", "011");
        expect(criar).toHaveProperty("descricao", "Expedição");
        expect(criar).toHaveProperty("ativo", "1");

        expect(statusCode).toEqual(200);
        expect(deletar).toHaveProperty("iddadosMudados", "011");
        expect(deletar).toHaveProperty("descricao", "Expedição");
        expect(deletar).toHaveProperty("ativo", "1");
      });
    });
  });
});
