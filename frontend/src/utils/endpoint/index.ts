import axios from 'axios';

import { buscaDadoUsuarioNaSessao } from '../buscaDadoUsuarioNaSessao';

const { tokenSessao } = buscaDadoUsuarioNaSessao();
export const endpoint = axios.create({
    baseURL: "http://localhost:3001/api/v1/",
    headers: {
      "Content-type": "application/json",
      'authorization-token':`${tokenSessao}`
    },
});
