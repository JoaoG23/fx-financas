import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  elementosId?: string;
};

export async function buscarTodosSubelementos({
  elementosId,
}: Criterios) {
  const resposta = await endpoint.get(`/subelementos/elementos/paginas`, {
    params: {
      numero_pagina:1,
      quantidade_items_pagina:100,
      elementosId,
    },
  });
  return resposta;
}
