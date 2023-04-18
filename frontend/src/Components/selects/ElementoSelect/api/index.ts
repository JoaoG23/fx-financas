import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  usuariosId?: string;
};

export async function buscarTodosElementos({
  usuariosId,
}: Criterios) {
  const resposta = await endpoint.get(`/elementos/usuarios/paginas`, {
    params: {
      numero_pagina:1,
      quantidade_items_pagina:100,
      usuariosId,
    },
  });
  return resposta;
}
