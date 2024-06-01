
type NullableString = string | null;
export interface ProgramacaoFluxocaixaCriadoDto {
  descricao?: string;
  elementosId: NullableString;
  subelementosId: NullableString;
  subtiposId: NullableString;
  tiposId: NullableString;
  locaisId: NullableString;
  usuariosId: NullableString;
  ativo?: boolean;
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
  ativos?: boolean;
  entradaOuSaidaOuTodos?:string
}
