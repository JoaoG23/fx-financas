export const converterValorNegativoSeForSaida = (
  entradaOuSaida: string,
  valorPositivo: number
) => {
  function converterPositivoParaNegativo() {
    let numeroPositivo = valorPositivo;
    let numeroNegativo = 0 - numeroPositivo;
    return numeroNegativo;
  }

  const isSaida = entradaOuSaida === 'saida';

  if (isSaida) {
    const valorNegativo = converterPositivoParaNegativo();
    return valorNegativo;
  }

  return valorPositivo;
};
