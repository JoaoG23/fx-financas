export const verificarSeNegativoERetornaEntradaOuSaida = (
  valorNegativo: number
) => {
  const isEntradaOuSaida = valorNegativo < 0 ? "saida" : "entrada";
  return isEntradaOuSaida;
};
