
type TipoDespesa = {
  limiteGasto: number;
};

export const extrairSaldoAtual = (despesa: TipoDespesa): number => {
  return despesa.limiteGasto;
};
