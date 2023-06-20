import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  elementosId?: string;
};

export async function buscarTodosSubelementos(elementosId: string) {
  const resposta = await endpoint.get(`/subelementos/elemento/${elementosId}`);
  return resposta;
}
