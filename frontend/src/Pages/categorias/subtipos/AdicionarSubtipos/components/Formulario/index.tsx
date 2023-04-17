import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { adicionarSubtipo } from "../../api";
import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { Subtipo } from "../../../../../../types/Subtipo";


export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams()
  const { mutate, isLoading, isSuccess } = useMutation(
    async (subtipo: Subtipo) =>
      await adicionarSubtipo(subtipo),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-subtipo");
        queryClient.invalidateQueries("subtipos-pagina");
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
        onSubmit={handleSubmit((subtipo: Subtipo) => {
          const novoSubtipo = {
            ...subtipo,
            tiposId: id,
          };
          mutate(novoSubtipo as any);
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
