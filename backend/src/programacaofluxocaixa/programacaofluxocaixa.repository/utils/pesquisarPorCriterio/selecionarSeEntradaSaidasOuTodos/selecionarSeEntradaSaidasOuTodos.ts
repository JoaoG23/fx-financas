
import { CriteriosPesquisa } from "../../../interfaces/CriteriosPesquisa";
import { retornaParametrosPesquisaEntrada } from "../retornaParametrosPesquisaEntrada";
import { retornaParametrosPesquisaSaida } from "../retornaParametrosPesquisaSaida";
import { retornaSemParametrosPesquisaTodosItem } from "../retornaSemParametrosPesquisaTodosItem";

export function selecionarSeEntradaSaidasOuTodos(
  entradaSaidaOuTodos: string,
  criterios: CriteriosPesquisa
) {
  if (entradaSaidaOuTodos === "entrada") {
    return retornaParametrosPesquisaEntrada(criterios);
  }
  if (entradaSaidaOuTodos === "saida") {
    return retornaParametrosPesquisaSaida(criterios);
  }
  return retornaSemParametrosPesquisaTodosItem(criterios);
}
