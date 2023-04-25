export const converterVazioParaNull = <T = unknown>(valor: T | null) => {
  return valor === "" ? null : valor;
};
