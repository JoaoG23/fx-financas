import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalCarregando from "../../../Components/Modais/ModalCarregando";
import { buscaDadoUsuarioNaSessao } from "../../../services/buscaDadoUsuarioNaSessao";
import { navegarAtePaginaDepoisTempo } from "../../../services/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { pegarUsuarioSessao } from "../../../utils/pegarUsuarioSessao";
import { logarUsuario } from "../api";
import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { FormularioStyle } from "./styles";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading, data } = useMutation(
    async (value: any) => await logarUsuario(value),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: (dados: any) => {
        const usuario = dados?.data;
        console.log("🚀 ~ file: Formulario.tsx:26 ~ usuario:", usuario);
        toast.success("Login Realizado com sucesso");
        pegarUsuarioSessao(usuario);
        navegarAtePaginaDepoisTempo(navigate,'/dashboard')
      },
    }
  );
  return (
    <FormularioStyle>
      <CamposFormulario
        funcaoSubmit={(values: any) => {
          mutate(values);
        }}
      />
      {isLoading && <ModalCarregando />}
    </FormularioStyle>
  );
};
