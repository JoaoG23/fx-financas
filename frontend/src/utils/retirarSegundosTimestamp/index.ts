export const retirarSegundosTimestamp = (elemento:string | any) => {
    let limiteSegundosEncontrado = elemento.indexOf('.');
    return elemento.substring(0, limiteSegundosEncontrado);

  }