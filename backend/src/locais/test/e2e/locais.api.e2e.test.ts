import { describe } from "vitest";
import { adicionarLocaisSubtests } from "./subtestes/adicionarLocaisSubtests.test";
import { editarLocaisSubtests } from "./subtestes/editarLocaisSubtests.test";

describe("ROTAS de manipulação /locais", () => {
    adicionarLocaisSubtests();
    editarLocaisSubtests()
});
