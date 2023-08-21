import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";

export interface IFluxoCaixaService {
  listarTodosPorUsuariosId(usuariosId: string);
  listarTodosPorPaginaUsuario(
    numero_pagina: number,
    quantidade_items_pagina: number,
    usuariosId: string
  );
  buscarPorId(id: string);
  criar(dados: FluxocaixaDto);
  criarVarios(itemsFluxocaixa: FluxocaixaDto[]);
  atualizarUmPorId(id: string, novosDados: FluxocaixaDto);
  deletarUmPorId(id: string);
  atualizarSaldoFinal(usuariosId: string);
  calcularSaldoAtual(usuariosId: string);
  atualizarDataInsersaoPorId(
    id: string,
    data_insersao: Pick<FluxocaixaDto, "data_insersao">
  );
}
