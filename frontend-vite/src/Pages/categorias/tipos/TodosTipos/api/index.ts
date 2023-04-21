import { endpoint } from "../../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  subelementosId?: string;
};

export async function buscarTodosTiposPorPagina({
  numero_pagina,
  quantidade_items_pagina = 12,
  subelementosId,
}: Criterios) {
  const resposta = await endpoint.get(`/tipos/subelementos/paginas`, {
    params: {
      numero_pagina,
      quantidade_items_pagina,
      subelementosId,
    },
  });
  return resposta;
}
