import axios from 'axios';
import { buscaDadoUsuarioNaSessao } from '../../utils/buscaDadoUsuarioNaSessao';


const { tokenSessao } = buscaDadoUsuarioNaSessao();
export const endpoint = axios.create({
    baseURL: "http://localhost:3001/api/v1/",
    headers: {
      "Content-type": "application/json",
      'auth':`${tokenSessao}`
    },
});
