import { limparTabelaUsuarios } from "../tests/utils/limparTabelaUsuarios";
import { usuarioCriado, usuarioEditado } from "../tests/seeds/usuarios";

import usuarioService from "./UsuariosServices";

describe("Services", () => {
  beforeEach(async () => {
    await limparTabelaUsuarios();
  });
  describe("CRIACAO", () => {
    describe("CriarUm: Quando enviar os dados usuario", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria criar um usuario retorna-lo na tela com as propriedades abaixo", async () => {
        const criar = await usuarioService.criarUm(usuarioCriado);

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
  });

  describe("LISTAGEM E BUSCA", () => {
    describe("listarTodos: Quando execultar o serviço", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria listar todos usuario na tela", async () => {
        const criar = await usuarioService.criarUm(usuarioCriado);
        const listar = await usuarioService.listarTodos();
        expect(listar).not.toBeNull();
        expect(listar).not.toStrictEqual([]);
      });
    });

    describe("buscarUmPeloIdusuario: Quando enviar um id_usuario para serviço", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria listar um usuario pelo id_usuario = admin", async () => {
        const id_usuario = "admin";
        const criar = await usuarioService.criarUm(usuarioCriado);
        const listarUm = await usuarioService.buscarUmPeloIdusuario(id_usuario);

        expect(listarUm).toHaveProperty("id_usuario", "admin");
        expect(listarUm).toHaveProperty("login_nome", "admin");
        expect(listarUm).toHaveProperty("email", "admin@admin.com");
        expect(listarUm).toHaveProperty("nome", "Adminstrador");
        expect(listarUm).toHaveProperty("senha", "admin");
        expect(listarUm).toHaveProperty("status", "1");
        expect(listarUm).toHaveProperty("id_perfil", "admin");
      });
    });

    describe("buscarUmPeloIdusuario: Quando enviar um id_usuario para serviço", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria listar um usuario pelo id_usuario = admin", async () => {
        const id_usuario = "admin";
        const criar = await usuarioService.criarUm(usuarioCriado);
        const listarUm = await usuarioService.buscarUmPeloIdusuario(id_usuario);

        expect(listarUm).toHaveProperty("id_usuario", "admin");
        expect(listarUm).toHaveProperty("login_nome", "admin");
        expect(listarUm).toHaveProperty("email", "admin@admin.com");
        expect(listarUm).toHaveProperty("nome", "Adminstrador");
        expect(listarUm).toHaveProperty("senha", "admin");
        expect(listarUm).toHaveProperty("status", "1");
        expect(listarUm).toHaveProperty("id_perfil", "admin");
      });
    });

    describe("buscarUmPeloEmail: Quando enviar um email para serviço", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria listar um usuario pelo email = admin@admin.com", async () => {
        const email = "admin@admin.com";
        const criar = await usuarioService.criarUm(usuarioCriado);
        const listarUm = await usuarioService.buscarUmPeloEmail(email);

        expect(listarUm).toHaveProperty("id_usuario", "admin");
        expect(listarUm).toHaveProperty("login_nome", "admin");
        expect(listarUm).toHaveProperty("email", "admin@admin.com");
        expect(listarUm).toHaveProperty("nome", "Adminstrador");
        expect(listarUm).toHaveProperty("senha", "admin");
        expect(listarUm).toHaveProperty("status", "1");
        expect(listarUm).toHaveProperty("id_perfil", "admin");
      });
    });

    describe("buscarUmNomeLogin: Quando enviar um login_Nome para serviço", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria listar um usuario pelo login_nome = admin", async () => {
        const login_nome = "admin";
        const criar = await usuarioService.criarUm(usuarioCriado);
        const listarUm = await usuarioService.buscarUmNomeLogin(login_nome);

        expect(listarUm).toHaveProperty("id_usuario", "admin");
        expect(listarUm).toHaveProperty("login_nome", "admin");
        expect(listarUm).toHaveProperty("email", "admin@admin.com");
        expect(listarUm).toHaveProperty("nome", "Adminstrador");
        expect(listarUm).toHaveProperty("senha", "admin");
        expect(listarUm).toHaveProperty("status", "1");
        expect(listarUm).toHaveProperty("id_perfil", "admin");
      });
    });

    describe("listarTodosPorPagina: Quando enviar argumentos numero_pagina, quantidade_items_pagina para o serviço", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria listar pela pagina 1 e quantidade = 10", async () => {
        const criar = await usuarioService.criarUm(usuarioCriado);
        const numero_pagina = 1;
        const quantidade_items_pagina = 10;
        const listar = await usuarioService.listarTodosPorPagina(
          numero_pagina,
          quantidade_items_pagina
        );

        expect(listar).not.toBeNull();
        expect(listar).not.toStrictEqual([]);
      });
    });
  });

  describe("EDICAO", () => {
    describe("atualizarPeloIdusuario: Quando criar um novo usuario", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria editar o novo usuario id_usuario e objeto como os novos dados e retorna", async () => {
        const id_usuario = "admin";
        const criar = await usuarioService.criarUm(usuarioCriado);
        const editar = await usuarioService.atualizarPeloIdusuario(
          id_usuario,
          usuarioEditado
        );

        expect(editar).toHaveProperty("login_nome", "tester");
        expect(editar).toHaveProperty("email", "tester@tester.com");
        expect(editar).toHaveProperty("nome", "Analistar de Testes");
        expect(editar).toHaveProperty("senha", "tester");
        expect(editar).toHaveProperty("status", "0");
        expect(editar).toHaveProperty("id_perfil", "tester");
      });
    });
  });

  describe("REMOCAO", () => {
    describe("deletarUmPeloIdusuario: Quando criar um novo usuario", () => {
      afterEach(async () => {
        await limparTabelaUsuarios();
      });
      test("Deveria ser capaz de deletar o usuario com id_usuario e retorna na tela", async () => {
        const id_usuario = "admin";
        const criar = await usuarioService.criarUm(usuarioCriado);
        const deletar = await usuarioService.deletarUmPeloIdusuario(id_usuario);

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
});
