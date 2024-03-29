import { beforeAll, describe } from "vitest";

import { adicionarLocaisSubtests } from "./subtestes/adicionarLocaisSubtests.test";
import { editarLocaisSubtests } from "./subtestes/editarLocaisSubtests.test";
import { deletarLocaisSubtests } from "./subtestes/deletarLocaisSubtests.test";
import { buscarPaginaTodosLocaisSubtests } from "./subtestes/buscarPaginaTodosLocaisSubtests.test";
import { buscarPorIdLocaisSubtests } from "./subtestes/buscarPorIdLocaisSubtests.test";

import { limparTabelaLocais } from "../utils/limparTabelaLocais";
import { buscarTodosLocaisPorUsuariosIdSubtests } from "./subtestes/buscarTodosLocaisPorUsuariosIdSubtests.test";

describe("ROTAS de manipulação /locais", () => {
  beforeAll(async () => {
    await limparTabelaLocais();
  });

  adicionarLocaisSubtests();
  editarLocaisSubtests();
  deletarLocaisSubtests();
  buscarPaginaTodosLocaisSubtests();
  buscarPorIdLocaisSubtests();
  buscarTodosLocaisPorUsuariosIdSubtests();
});
