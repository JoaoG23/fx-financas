import axios from "axios";
import { buscaDadoUsuarioNaSessao } from "../../utils/buscaDadoUsuarioNaSessao";

const rotaPrincipal = import.meta.env.VITE_SOME_KEY;

const { tokenSessao } = buscaDadoUsuarioNaSessao();
export const endpoint = axios.create({
  baseURL: rotaPrincipal,
  headers: {
    "Content-type": "application/json",
    auth: `${tokenSessao}`,
  },
});

endpoint.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      sessionStorage.removeItem("token");
    }
    return Promise.reject(error);
  }
);
