import { beforeAll, describe } from "vitest";

import { limparTabelaFluxoCaixa } from "../utils/limparTabelaFluxoCaixa";


import { buscarSaldoAtualUsuarioSubtests } from "./subtestes/buscarSaldoAtualUsuarioSubtests.test";
import { buscarSomaGanhosMesUsuarioSubtests } from "./subtestes/buscarSomaGanhosMesUsuarioSubtests.test";
import { buscarSomaGastosMesUsuarioSubtests } from "./subtestes/buscarSomaGastosMesUsuarioSubtests.test";
import { buscarDespesas12MesesSubtests } from "./subtestes/buscarDespesas12MesesSubtests.test";

describe("ROTAS de manipulação /estatisticas", () => {
  beforeAll(async () => {
    await limparTabelaFluxoCaixa();
  });

  buscarSomaGanhosMesUsuarioSubtests()
  buscarSomaGastosMesUsuarioSubtests()
  buscarSaldoAtualUsuarioSubtests();
  buscarDespesas12MesesSubtests()
  
});
