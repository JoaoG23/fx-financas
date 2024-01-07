import { endpoint } from "../../../../../../../services/endpoint";
import { buscaDadoUsuarioNaSessao } from "../../../../../../../utils/buscaDadoUsuarioNaSessao";

const { idUsuario } = buscaDadoUsuarioNaSessao();

const anoAtual = new Date().getFullYear();

export const buscarReceitasEDespesas12MesesAno = async () => {
  const resposta = await endpoint.get(
    `/estatisticas/despesas_receitas_dozes_meses?usuariosId=${idUsuario}&ano=${anoAtual}`
  );
  return resposta;
};
