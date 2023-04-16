import { endpoint } from "../../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  elementosId?: string;
};

export async function buscarTodosElementos({
  numero_pagina,
  quantidade_items_pagina = 12,
  elementosId,
}: Criterios) {
  const resposta = await endpoint.get(`/elementos/usuarios/paginas`, {
    params: {
      numero_pagina,
      quantidade_items_pagina,
      elementosId,
    },
  });
  return resposta;
}
