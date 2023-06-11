import { beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";

import { buscarSaldoAtualUsuarioSubtests } from "./subtestes/buscarSaldoAtualUsuarioSubtests.test";
import { buscarSomaGanhosMesUsuarioSubtests } from "./subtestes/buscarSomaGanhosMesUsuarioSubtests.test";
import { buscarSomaGastosMesUsuarioSubtests } from "./subtestes/buscarSomaGastosMesUsuarioSubtests.test";
import { buscarDespesas12MesesSubtests } from "./subtestes/buscarDespesas12MesesSubtests.test";
import { buscarReceitas12MesesSubtests } from "./subtestes/buscarReceitas12MesesSubtests.test";
import { buscarReceitasDespesas12MesesSubtests } from "./subtestes/buscarReceitasDespesas12MesesSubtests.test";

describe("ROTAS de manipulação /estatisticas", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  buscarReceitasDespesas12MesesSubtests()
  // buscarSomaGanhosMesUsuarioSubtests();
  // buscarSomaGastosMesUsuarioSubtests();
  // buscarSaldoAtualUsuarioSubtests();
  // buscarDespesas12MesesSubtests();
  // buscarReceitas12MesesSubtests();
});
