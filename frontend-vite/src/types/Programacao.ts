export type Programacao = {
  orderador?: number;
  id?: string;
  ativo?: boolean;
  data_insersao?: Date | string;
  hora_insersao?: Date | string;
  descricao?: string;
  entradaSaida?: string | boolean;
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

export type ProgramacaoCriada = {
  descricao?: string;
  entradaSaida?: boolean;
  valor?: string;
  saldo?: number;
  elementosId?: string;
  usuariosId?: string;
  locaisId?: string;
  subelementosId?: string;
  tiposId?: string;
  subtiposId?: string;
};
