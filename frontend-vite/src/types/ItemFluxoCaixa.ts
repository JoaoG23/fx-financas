export type ItemFluxoCaixa = {
  orderador?: number;
  id?: string;
  data_insersao?: Date | string;
  hora_insersao?: Date | string;
  descricao?: string;
  entradaSaida?: boolean | string;
  valor?: number;
  saldo?: number;
  elementosId?: string;
  usuariosId?: string;
  locaisId?: string;
  subelementosId?: string;
  tiposId?: string;
  subtiposId?: string;
  tipos_despesasId?: string;
  locais?: {
    descricao?: string;
  };
  elementos?: {
    descricao?: string;
  };
  subelementos?: {
    descricao?: string;
  };
  tipos?: {
    descricao?: string;
  };
  subtipos?: {
    descricao?: string;
  };
  tipos_despesas?: {
    descricao?: string;
  };
};

export type ItemFluxoCaixaCriado = {
  descricao?: string;
  entradaSaida?: string;
  valor?: string;
  saldo?: number;
  elementosId?: string;
  usuariosId?: string;
  locaisId?: string;
  subelementosId?: string;
  tiposId?: string;
  subtiposId?: string;
  tipos_despesasId?: string;
};
