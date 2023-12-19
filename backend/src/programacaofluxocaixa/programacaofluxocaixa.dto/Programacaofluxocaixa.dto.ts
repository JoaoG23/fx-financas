export interface ProgramacaoFluxocaixaCriadoDto {
  descricao?: string;
  elementosId: string;
  subelementosId: string;
  subtiposId: string;
  tiposId: string;
  locaisId: string;
  usuariosId: string;
  valor: number;
}

export interface ProgramacaoFluxocaixaVisualizarDto {
  descricao?: string;
  elementosId?: string;
  subelementosId?: string;
  subtiposId?: string;
  tiposId?: string;
  locaisId?: string;
  usuariosId?: string;
  valor?: number;
}
