import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { CamposFormulario } from "../../../ComponentesParaTodos/campos/CamposFormulario";
import { ModalSucesso } from "../../../../../../Components/Modais/ModalSucesso";
import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { editarSubelementoPorId, buscarUmSubelementoPorId } from "../../api";
import { navegarAtePaginaDepoisTempo } from "../../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { Subelemento } from "../../../../../../types/Subelemento";

export const Formulario: React.FC = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { id } = useParams();

  const { isLoading: isCarregandoSubelementoAnterior, data } = useQuery(
    ["ver-um-subelemento", id],
    () => buscarUmSubelementoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subelemento = data?.data;

  const {
    mutate,
    isLoading: isCarregandoSalvacaosubelemento,
    isSuccess,
  } = useMutation(
    async (subelemento: Subelemento) => await editarSubelementoPorId(id!, subelemento),
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
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(subelemento);
  }, [subelemento, reset]);

  return (
    <>
      <CamposFormulario
        onSubmit={handleSubmit((subelemento: Subelemento) => {
          mutate(subelemento);
        })}
        register={register}
        control={control}
        errors={errors}
      />
      {isSuccess && <ModalSucesso />}
      {isCarregandoSalvacaosubelemento && <ModalCarregando />}
      {isCarregandoSubelementoAnterior && <ModalCarregando />}
    </>
  );
};
