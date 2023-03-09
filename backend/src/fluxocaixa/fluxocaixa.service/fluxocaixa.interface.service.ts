import { FluxocaixaDto } from "../fluxocaixa.dto/fluxocaixa.dto";

export interface IFluxoCaixaService {
    listarTodos();
    listarTodosPorPaginaUsuario(
      numero_pagina: number,
      quantidade_items_pagina: number,
      usuariosId: string
    );
    listaPorId(id: string);
    criar(dados: FluxocaixaDto);
    atualizarPorId(id: string, novosDados: FluxocaixaDto);
    deletarPorId(id: string);
  }
  
  