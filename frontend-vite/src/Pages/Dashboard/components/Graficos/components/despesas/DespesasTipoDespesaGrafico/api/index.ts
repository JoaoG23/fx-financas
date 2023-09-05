import { endpoint } from "../../../../../../../../services/endpoint";

import { buscaDadoUsuarioNaSessao } from "../../../../../../../../utils/buscaDadoUsuarioNaSessao";


const { idUsuario } = buscaDadoUsuarioNaSessao();

export const buscarDespesaMesPorTiposDespesasUsuarios = async (mes: number) => {
  const resposta = await endpoint.get(
    `/estatistica/tipos_despesas/despesas_tipos_despesas/`,{
      params: {
        mes,
        usuariosId:idUsuario
      }
    }
  );
  return resposta;
};
