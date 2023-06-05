import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  subelementosId?: string;
};

export async function buscarTodosTipoDespesa() {
  const resposta = await endpoint.get(`/tipos_despesas/paginas`, {
    params: {
      quantidade_items_pagina: 20,
      numero_pagina: 1,
    },
  });
  return resposta;
}
