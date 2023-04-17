import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  usuariosId?: string;
};

export async function buscarFluxoCaixaPorUsuario({
  numero_pagina,
  quantidade_items_pagina = 4,
  usuariosId,
}: Criterios) {
  const resposta = await endpoint.get(`/fluxocaixa/paginas`, {
    params: {
      numero_pagina,
      quantidade_items_pagina,
      usuariosId,
    },
  });
  return resposta;
}
