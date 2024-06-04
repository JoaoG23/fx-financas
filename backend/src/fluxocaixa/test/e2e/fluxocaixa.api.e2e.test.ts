import { afterAll, beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";

import { adicionarItemFluxoCaixaSubtests } from "./subtestes/adicionarItemFluxoCaixaSubtests.test";
import { buscarTodosFluxocaixaSubtests } from "./subtestes/buscarTodosItemFluxocaixaSubtests.test";
import { editarItemSubtests } from "./subtestes/editarItemSubtests.test";
import { deletarItemSubTests } from "./subtestes/deletarItemSubtests.test";
import { atualizarDataInsersaoItemSubtests } from "./subtestes/atualizarDataInsersaoItemSubtests.test";
import { adicionarEmMassaFluxoCaixaSubtests } from "./subtestes/adicionarEmMassaFluxoCaixaSubtests.test";
import { pesquisarItemFluxoCaixaPorCriterioSubtestes } from "./subtestes/pesquisarItemCriterioFluxoCaixaSubtestes.test";

describe("ROTAS de manipulação /fluxocaixa", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });
  afterAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  editarItemSubtests();
  atualizarDataInsersaoItemSubtests();

  buscarTodosFluxocaixaSubtests();
  pesquisarItemFluxoCaixaPorCriterioSubtestes()

  deletarItemSubTests();

  adicionarItemFluxoCaixaSubtests();
  adicionarEmMassaFluxoCaixaSubtests();
});
