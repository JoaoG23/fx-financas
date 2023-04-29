export type ItemFluxoCaixa = {
  orderador?: number;
  id?: string;
  data_insersao?: Date | string;
  hora_insersao?: Date | string;
  descricao?: string;
  entradaSaida?:boolean;
  valor?:  string;
  saldo?: number;
  elementosId?: string;
  usuariosId?: string;
  locaisId?:string;
  subelementosId?:string;
  tiposId?: string;
  subtiposId?: string;
  elementos?: {
    descricao?: string;
  };
  subelementos?: {
    descricao?: string;
  };
  tipos?: {
    descricao?:string
  };
  subtipos?: {
    descricao?:string
  };
};
export type ItemFluxoCaixaCreate = {
  descricao?: string;
  entradaSaida?:boolean;
  valor?:  string;
  saldo?: number;
  elementosId?: string;
  usuariosId?: string;
  locaisId?:string;
  subelementosId?:string;
  tiposId?: string;
  subtiposId?: string;
};
