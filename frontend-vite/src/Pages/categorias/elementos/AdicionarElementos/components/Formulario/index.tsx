import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { Elemento } from "../../../../../../types/Elemento";
import { adicionarElemento } from "../../api";
import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { buscaDadoUsuarioNaSessao } from "../../../../../../utils/buscaDadoUsuarioNaSessao";

export const Formulario: React.FC = () => {
  const { idUsuario } = buscaDadoUsuarioNaSessao();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate, isLoading, isSuccess } = useMutation(
    async (elemento: Elemento) => await adicionarElemento(elemento),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-elemento");
        queryClient.invalidateQueries("listar-elementos-por-pagina");
        navegarAtePaginaDepoisTempo(navigate, -1);
      },
    }
  );

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((elemento: Elemento) => {
          const novoElemento = {
            ...elemento,
            usuariosId: idUsuario,
          };
          mutate(novoElemento as any);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isLoading && <ModalCarregando />}
    </>
  );
};
