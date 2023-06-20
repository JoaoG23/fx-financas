import { beforeAll, describe } from "vitest";


import { limparTabelaSubelementos } from "../utils/limparTabelaSubelementos";
import { adicionarSubelementosSubtests } from "./subtestes/adicionarSublementosSubtests.test";

describe("ROTAS de manipulação /subelementos", () => {
  beforeAll(async () => {
    await limparTabelaSubelementos();
  });

  adicionarSubelementosSubtests();
  // buscarElementosPorUsuariosIdSubtests()
});
