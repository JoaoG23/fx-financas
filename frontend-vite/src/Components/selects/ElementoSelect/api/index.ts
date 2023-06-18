import { endpoint } from "../../../../services/endpoint";

type Criterios = {
  numero_pagina?: number;
  quantidade_items_pagina?: number;
  usuariosId?: string;
};

export async function buscarTodosElementos({ usuariosId }: Criterios) {
  const resposta = await endpoint.get(`/elementos/usuario/${usuariosId}`);
  return resposta;
}
