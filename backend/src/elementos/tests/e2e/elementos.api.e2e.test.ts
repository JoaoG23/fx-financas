import { beforeAll, describe } from "vitest";

import { limparTabelaElementos } from "../utils/limparTabelaElementos";

import { adicionarElementosSubtests } from "./subtestes/adicionarElementosSubtests.test";

describe("ROTAS de manipulação /elementos", () => {
  beforeAll(async () => {
    await limparTabelaElementos();
  });

  adicionarElementosSubtests();
});
