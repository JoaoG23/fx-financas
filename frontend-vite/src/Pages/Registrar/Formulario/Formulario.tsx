import React from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { navegarAtePaginaDepoisTempo } from "../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { FormularioStyle } from "./styles";

import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { SpinnerCarregamento } from "../../../Components/spinners/SpinnerCarregamento";
import { SecondaryButton } from "../../../Components/Buttons/SecondaryButton/ButtonDark";

import { registrarUsuario } from "../api";

import { Usuario } from "../../../types/usuario/Usuario";

import { BsArrowLeftCircleFill } from "react-icons/bs";

export const Formulario: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    control,
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
        control={control}
      />
      {isLoading && <SpinnerCarregamento />}

      <SecondaryButton onClick={() => navigate("/")}>
        <BsArrowLeftCircleFill />
        <p>Voltar</p>
      </SecondaryButton>
    </FormularioStyle>
  );
};
