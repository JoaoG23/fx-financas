import { beforeAll, describe } from "vitest";

import { limparTabelaTiposDespesas } from "../utils/limparTabelaTiposDespesas";

import { adicionarTipoDespesaSubtests } from "./subtestes/adicionarTipoDespesaSubtests.test";
import { buscarPaginaTodosTiposDespesaSubtests } from "./subtestes/buscarPaginaTodosTiposDespesaSubtests.test";
import { editarTipoDespesaSubtests } from "./subtestes/editarTipoDespesaSubtests.test";
import { deletarTipoDespesaSubtests } from "./subtestes/deletarTipoDespesasSubtests.test";
import { buscarPorIdTipoDespesaSubtests } from "./subtestes/buscarPorIdTipoDespesaSubtests.test";

describe("ROTAS de manipulação /tipos_despesas", () => {
  beforeAll(async () => {
    await limparTabelaTiposDespesas();
  });

  adicionarTipoDespesaSubtests();
  buscarPaginaTodosTiposDespesaSubtests();
  editarTipoDespesaSubtests();
  deletarTipoDespesaSubtests();
  buscarPorIdTipoDespesaSubtests();
});
