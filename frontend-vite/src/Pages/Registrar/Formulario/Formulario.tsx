import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { ModalCarregando } from "../../../Components/Modais/ModalCarregando";
import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { FormularioStyle } from "./styles";

import { registrarUsuario } from "../api";

import { Usuario } from "../../../types/usuario/Usuario";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate, isLoading } = useMutation(
    async (usuario: Usuario) => await registrarUsuario(usuario),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        toast.success("Usuario registrado com sucesso");
        navegarAtePaginaDepoisTempo(navigate, "/");
        reset({});
      },
    }
  );

  return (
    <FormularioStyle>
      <CamposFormulario
        funcaoSubmit={handleSubmit((usuario: Usuario) => {
          mutate(usuario);
        })}
        register={register}
        errors={errors}
      />
      {isLoading && <ModalCarregando />}
    </FormularioStyle>
  );
};
