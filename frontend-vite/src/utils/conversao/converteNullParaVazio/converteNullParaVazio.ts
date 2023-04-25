
export const converterNullParaVazio = <T = unknown>(valor: T |null  | undefined) => {
  return valor ? valor : ''
}
