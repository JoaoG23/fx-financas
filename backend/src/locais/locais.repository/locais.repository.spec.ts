import { afterAll, describe } from "vitest";
import { limparTabelaLocais } from "../test/utils/limparTabelaLocais";
import { salvarItemTeste } from "./subtestes/save.repository.spec";
import { atualizarItem } from "./subtestes/update.repository.spec";
import { buscarPorId } from "./subtestes/findById.repository.spec";

describe("locais.repository", () => {
  afterAll(async () => {
    await limparTabelaLocais();
  });

  salvarItemTeste();
  atualizarItem();
  buscarPorId()
});
