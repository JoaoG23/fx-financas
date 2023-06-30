import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  usuariosId: string;
};

export async function buscarFluxoCaixaMesPorUsuario({
  numero_pagina,
  quantidade_items_pagina = 12,
  usuariosId,
}: Criterios) {
  const resposta = await endpoint.get(`/fluxocaixa/paginas/mes`, {
    params: {
      numero_pagina,
      quantidade_items_pagina,
      usuariosId,
    },
  });
  return resposta;
}
