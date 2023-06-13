import { beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";

import { adicionarItemFluxoCaixaSubtests } from "./subtestes/adicionarItemFluxoCaixaSubtests.test";
import { buscarTodosFluxocaixaSubtests } from "./subtestes/buscarTodosItemFluxocaixaSubtests.test";
import { editarItemSubtests } from "./subtestes/editarItemSubtests.test";
import { deletarItemSubTests } from "./subtestes/deletarItemSubtests.test";

describe("ROTAS de manipulação /fluxocaixa", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });
  editarItemSubtests();
  buscarTodosFluxocaixaSubtests();
  adicionarItemFluxoCaixaSubtests();
  deletarItemSubTests();
});
