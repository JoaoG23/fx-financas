import { TipoDespesaDto } from "../tiposDespesas.dto/tiposDespesas.dto";

export interface TiposDespesasServiceInteface {
  validarTodosCampos(tipoDespesa: TipoDespesaDto);

  validarNaoExisteId(id: string);

  listaUmPorId(id: string);

  listarTodosPorPaginaUsuariosId(
    numeroPagina: number,
    quantidadeItemPagina: number,
    usuariosId: string
  );

  criarUm(TipoDespesaDto: TipoDespesaDto);

  atualizarUmPorId(id: string, TipoDespesaDto: TipoDespesaDto);

  deletarUmPorId(id: string);
}
