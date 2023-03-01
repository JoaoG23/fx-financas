
export type ResponseLogin = {
  dadosUsuario?:object;
  situacao?: boolean;
  msg?: string;
  tokenUser?: string;
};

export type DadosUsuario = {
  usuario: string;
  senha: string;
};
