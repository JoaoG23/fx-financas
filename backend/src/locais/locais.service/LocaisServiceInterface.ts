import { LocaisDto } from "../locais.dto/locais.dto";

export interface LocaisServiceInterface {
  validarNaoExisteId(id: string);

  listaUmPorId(id: string);

  contarTotalRegistros();

  listarTodosPorPagina(numeroPagina: number, quantidadeItemPagina: number);

  criarUm(local: LocaisDto);

  atualizarUmPorId(id: string, local: LocaisDto);

  deletarUmPorId(id: string);
}
