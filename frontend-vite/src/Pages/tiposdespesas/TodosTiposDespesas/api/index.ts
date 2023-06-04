import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
};

export async function buscarTodosTiposDespesas({
  numero_pagina,
  quantidade_items_pagina = 12,
}: Criterios) {
  const resposta = await endpoint.get(`/tipos_despesas/paginas`, {
    params: {
      numero_pagina,
      quantidade_items_pagina,
    },
  });
  return resposta;
}
