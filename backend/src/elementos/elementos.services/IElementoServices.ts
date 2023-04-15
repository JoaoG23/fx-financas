import { ElementoDto } from "../elementos.dto/Elementos.dto";

export interface IElementosServices {
  criar(data: ElementoDto);
  atualizarUmPorId(id: string, dadosNovos: ElementoDto);
  deletarUmPorId(id: string);
  validarExisteId(id: string, operacao: string);
  listarTodos();
  buscarPorId(id: string);
  listarPorUsuarioPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );
}
