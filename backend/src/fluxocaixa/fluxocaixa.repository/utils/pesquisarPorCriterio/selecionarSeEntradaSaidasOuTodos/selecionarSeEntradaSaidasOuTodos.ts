import { CriteriosPesquisa } from "../../../../interfaces/CriteriosPesquisa";

import { retornaParametrosPesquisaEntrada } from "../retornaParametrosPesquisaEntrada";
import { retornaParametrosPesquisaSaida } from "../retornaParametrosPesquisaSaida";
import { retornaSemParametrosPesquisaTodosItem } from "../retornaSemParametrosPesquisaTodosItem";

export function selecionarSeEntradaSaidasOuTodos(
  entradaSaidaOrTodos: string,
  criterios: CriteriosPesquisa
) {
  if (entradaSaidaOrTodos === "entrada") {
    return retornaParametrosPesquisaEntrada(criterios);
  }
  if (entradaSaidaOrTodos === "saida") {
    return retornaParametrosPesquisaSaida(criterios);
  }
  return retornaSemParametrosPesquisaTodosItem(criterios);
}
