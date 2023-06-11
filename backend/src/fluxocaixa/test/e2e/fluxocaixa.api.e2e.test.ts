import { beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";

import { adicionarItemFluxoCaixaSubtests } from "./subtestes/adicionarItemFluxoCaixaSubtests.spec";
import { buscarTodosFluxocaixaSubtests } from "./subtestes/buscarTodosItemFluxocaixaSubtests.test";

describe("ROTAS de manipulação /fluxocaixa", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  buscarTodosFluxocaixaSubtests();
  adicionarItemFluxoCaixaSubtests();
});
