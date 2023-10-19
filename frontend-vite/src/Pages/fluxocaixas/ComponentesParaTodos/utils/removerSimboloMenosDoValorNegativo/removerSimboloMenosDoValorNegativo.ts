export const removerSimboloMenosDoValorNegativo = (valorNegativo: number) => {
  function converterParaValorAbsoluto() {
    return Math.abs(valorNegativo);
  }

  const valorAbsoluto =
    valorNegativo < 0 ? converterParaValorAbsoluto() : Number(valorNegativo);
  return valorAbsoluto;
};
