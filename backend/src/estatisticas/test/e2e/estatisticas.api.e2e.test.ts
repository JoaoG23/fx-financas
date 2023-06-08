import { beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";


import { buscarSaldoAtualUsuarioSubtests } from "./subtestes/buscarSaldoAtualUsuarioSubtests.test";
import { buscarSomaGanhosMesUsuarioSubtests } from "./subtestes/buscarSomaGanhosMesUsuarioSubtests.test";
import { buscarSomaGastosMesUsuarioSubtests } from "./subtestes/buscarSomaGastosMesUsuarioSubtests.test";

describe("ROTAS de manipulação /estatisticas", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  buscarSomaGanhosMesUsuarioSubtests()
  buscarSomaGastosMesUsuarioSubtests()
  buscarSaldoAtualUsuarioSubtests();
  
});
