import { beforeAll, describe } from "vitest";

import { limparTabelaElementos } from "../utils/limparTabelaElementos";

import { adicionarElementosSubtests } from "./subtestes/adicionarElementosSubtests.test";
import { buscarElementosPorUsuariosIdSubtests } from "./subtestes/buscarElementosPorUsuariosIdSubtests.test";
import { buscarPaginaTodosElementosSubtests } from "./subtestes/buscarElementoPorPaginaSubtests.test";
import { deletarElementoSubTests } from "./subtestes/deletarElementoPorIdSubtests.test";

describe("ROTAS de manipulação /elementos", () => {
  beforeAll(async () => {
    await limparTabelaElementos();
  });

  adicionarElementosSubtests();
  buscarElementosPorUsuariosIdSubtests()
  buscarPaginaTodosElementosSubtests()
  deletarElementoSubTests()
});
