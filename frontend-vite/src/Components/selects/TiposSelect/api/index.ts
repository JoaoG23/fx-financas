import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  subelementosId?: string;
};

export async function buscarTodosTipos({
  subelementosId,
}: Criterios) {
  const resposta = await endpoint.get(`/tipos/subelementos/paginas`, {
    params: {
      numero_pagina:1,
      quantidade_items_pagina:100,
      subelementosId,
    },
  });
  return resposta;
}
