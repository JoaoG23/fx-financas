import { beforeEach, describe, expect, test } from "vitest";
import request from "supertest";

import app from "../../../../app";

import autenticacao from "../../../../utils/Autenticacao";

// import {
//   item1FluxocaixaCriado,
//   item2FluxocaixaCriado,
// } from "../../mock/fluxocaixasCriado";

import { limparTabelaUsuarios } from "../../../../usuarios/tests/utils/limparTabelaUsuarios";
import { limparTabelaFluxoCaixa } from "../../../../estatisticasPrincipais/test/utils/limparTabelaFluxoCaixa";

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

describe("GET /api/v1/estatisticas/saldo_atual", async () => {
  const token = await autenticacao.gerarTokenSessao(logado);

  describe("(SUCESSO) Quando após item fluxo de caixa ter sido criado", () => {
    beforeEach(async () => {
      await limparTabelaFluxoCaixa();
      await limparTabelaUsuarios();
    });

    test.only("Deverá ser capaz de tirar a diferença entre (gasto e ganho) e retorna (saldo atual)", async () => {
      const usuario = await criarUsuario();
      const idUsuario = usuario.body.id;

      // Passos --------------------------

      // 1- Criar um Usuario.
      // 2- Criar elemento.
      // 3- Criar item fluxo de caixa valor abaixo de 0.
      // 4- Busca valores baixo de 0 por elemento.

    //   const resposta = retorno.body;
    //   expect(retorno.statusCode).toEqual(200);

    //   expect(resposta).not.toBeNull();
    //   expect(resposta).toBe(50);
    });
  });
});
