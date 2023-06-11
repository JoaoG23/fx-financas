import { beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";

import { buscarSaldoAtualUsuarioSubtests } from "./subtestes/buscarSaldoAtualUsuarioSubtests.test";
import { buscarSomaGanhosMesUsuarioSubtests } from "./subtestes/buscarSomaGanhosMesUsuarioSubtests.test";
import { buscarSomaGastosMesUsuarioSubtests } from "./subtestes/buscarSomaGastosMesUsuarioSubtests.test";
import { buscarReceitasDespesas12MesesSubtests } from "./subtestes/buscarReceitasDespesas12MesesSubtests.test";

describe("ROTAS de manipulação /estatisticas", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  buscarReceitasDespesas12MesesSubtests()
  buscarSomaGanhosMesUsuarioSubtests();
  buscarSomaGastosMesUsuarioSubtests();
  buscarSaldoAtualUsuarioSubtests();
});
