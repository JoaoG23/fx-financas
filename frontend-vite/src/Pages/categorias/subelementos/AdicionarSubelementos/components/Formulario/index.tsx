import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { adicionarSubelementos } from "../../api";

import { buscaDadoUsuarioNaSessao } from "../../../../../../utils/buscaDadoUsuarioNaSessao";
import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

import { Subelemento } from "../../../../../../types/Subelemento";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  
  const { id } = useParams();
  const { idUsuario } = buscaDadoUsuarioNaSessao();


  const { mutate, isLoading, isSuccess } = useMutation(
    async (subelemento: Subelemento) =>
      await adicionarSubelementos(subelemento),
    {
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
      onSuccess: () => {
        queryClient.invalidateQueries("listar-um-subelemento");
        queryClient.invalidateQueries("listar-subelementos-por-pagina");
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
        onSubmit={handleSubmit((elemento: Subelemento) => {
          const novoSubElemento = {
            ...elemento,
            elementosId: id,
            usuariosId: idUsuario,
          };
          mutate(novoSubElemento as Subelemento);
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
