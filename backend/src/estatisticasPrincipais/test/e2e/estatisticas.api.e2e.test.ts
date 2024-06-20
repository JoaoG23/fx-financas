import { afterAll, beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";

import { obterDetalhesFinanceirosMesPorUsuarioSubtests } from "./subtestes/obterDetalhesFinanceirosMesPorUsuarioSubtest.test";
import { buscarReceitasDespesas12MesesSubtests } from "./subtestes/buscarReceitasDespesas12MesesSubtests.test";

describe("ROTAS de manipulação /estatisticas", () => {
  afterAll(async () => {
    await limparTabelaFluxoCaixa();
  });
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  buscarReceitasDespesas12MesesSubtests();
  obterDetalhesFinanceirosMesPorUsuarioSubtests();
});
