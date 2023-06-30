import { BsPersonFillAdd } from "react-icons/bs";
import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { pegarUsuarioSessao } from "../../../utils/pegarUsuarioSessao";

import { logarUsuario } from "../api";

import { FormularioStyle } from "./styles";

import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(
    async (dadosUsuario: any) => await logarUsuario(dadosUsuario),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: (dados: any) => {
        const usuario = dados?.data;
        toast.success("Login Realizado com sucesso");
        pegarUsuarioSessao(usuario);
        navegarAtePaginaDepoisTempo(navigate, "/dashboard");
        navegarAtePaginaDepoisTempo(navigate, 0);
      },
    }
  );
  return (
    <FormularioStyle>
      <CamposFormulario
        funcaoSubmit={(usuario: any) => {
          mutate(usuario);
        }}
      />
      {isLoading && <SpinnerCarregamento />}
      <SecondaryButton onClick={() => navigate("/registrar")}>
        <p>Registrar</p>
        <BsPersonFillAdd />
      </SecondaryButton>
    </FormularioStyle>
  );
};
