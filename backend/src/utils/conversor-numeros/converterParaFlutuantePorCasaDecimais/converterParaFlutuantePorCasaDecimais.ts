export const converterParaFlutuantePorCasaDecimais = (
  valor: number,
  numeroCasasDecimais: number = 2
): number => {
  const valorString = valor.toFixed(numeroCasasDecimais);
  return parseFloat(valorString);
};
