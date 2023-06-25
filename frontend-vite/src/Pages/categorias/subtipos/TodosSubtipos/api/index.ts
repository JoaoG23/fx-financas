import { endpoint } from "../../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  tiposId?: string;
};

export async function buscarTodosSubtiposPorPagina({
  numero_pagina,
  quantidade_items_pagina = 12,
  tiposId,
}: Criterios) {
  const resposta = await endpoint.get(`/subtipos/tipos/paginas`, {
    params: {
      numero_pagina,
      quantidade_items_pagina,
      tiposId,
    },
  });
  console.log("🚀 ~ file: index.ts:16 ~ resposta:", resposta)
  return resposta;
}
