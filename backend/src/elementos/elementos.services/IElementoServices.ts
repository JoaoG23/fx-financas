import { ElementoDto } from "../elementos.dto/Elementos.dto";

export interface IElementosServices {
  criar(data: ElementoDto);
  atualizarUmPorId(id: string, dadosNovos: ElementoDto);
  deletarUmPorId(id: string);
  validarExisteId(id: string, operacao: string);
  listarTodos();
  listarTodosPorUsuario(usuariosId:string);
  buscarPorId(id: string);
  listarPorUsuarioPorPagina(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );
}
