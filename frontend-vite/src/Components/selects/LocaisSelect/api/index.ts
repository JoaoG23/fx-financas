import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  subelementosId?: string;
};

export async function buscarTodosLocaisPorId() {
  const resposta = await endpoint.get(`/locais`, {});
  return resposta;
}
