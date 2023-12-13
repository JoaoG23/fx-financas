import { SubelementoDto } from "../subelementos.dto/subelementos.dto";

export interface ISubelementosService {
  criar(data: SubelementoDto);
  atualizarUmPorId(id: string, dadosNovos: SubelementoDto);
  deletarUmPorId(id: number);

  buscarPorId(id: string): unknown;
  listarTodosPorElementosId(elementosId: string);
  listarPorElementosPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    elementosId: any
  );
}
