import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  tiposId?: string;
};

export async function buscarTodosSubTipos({
  tiposId,
}: Criterios) {
  const resposta = await endpoint.get(`/subtipos/tipos/paginas`, {
    params: {
      numero_pagina:1,
      quantidade_items_pagina:100,
      tiposId,
    },
  });
  return resposta;
}
