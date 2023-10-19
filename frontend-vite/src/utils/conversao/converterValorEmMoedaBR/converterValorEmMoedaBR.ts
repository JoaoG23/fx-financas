export const converterValorEmMoedaBR = (valor: number) => {
  const formatarEmMoedaReais = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });

  return formatarEmMoedaReais.format(valor);
};
