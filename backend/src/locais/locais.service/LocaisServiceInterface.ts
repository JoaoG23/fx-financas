import { LocaisDto } from "../locais.dto/locais.dto";

export interface LocaisServiceInterface {
  validarTodosCampos(local: LocaisDto);

  validarNaoExisteId(id: string);

  listaUmPorId(id: string);

  listarTodosPorPaginaUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );

  criarUm(local: LocaisDto);

  atualizarUmPorId(id: string, local: LocaisDto);

  deletarUmPorId(id: string);
}
