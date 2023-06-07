import { beforeAll, describe } from "vitest";
import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";
import { adicionarItemFluxoCaixaSubtests } from "./subtestes/adicionarLocaisSubtests.spec";

describe("ROTAS de manipulação /fluxocaixa", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  adicionarItemFluxoCaixaSubtests();
  
});
