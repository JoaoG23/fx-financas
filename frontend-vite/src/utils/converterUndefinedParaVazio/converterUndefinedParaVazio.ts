export const converterUndefinedParaVazio = <T = unknown> (valor:T) => {
    return valor === undefined ? '' : valor
}