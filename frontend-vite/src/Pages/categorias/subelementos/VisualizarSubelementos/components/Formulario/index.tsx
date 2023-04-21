import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import { buscarUmSubElementoPorId } from "../../api";

import { VisualizarCamposFormulario } from "../../../ComponentesParaTodos/campos/VisualizarCamposFormulario";

export const Formulario: React.FC = () => {
  const { id } = useParams();

  const { isLoading: isCarregandosubelementoAnterior, data } = useQuery(
    ["ver-um-subelemento", id],
    () => buscarUmSubElementoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const subelemento = data?.data;

  const {
    register,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(subelemento);
  }, [subelemento, reset]);

  return (
    <>
      <VisualizarCamposFormulario
        register={register}
        control={control}
        errors={errors}
      />
      {isCarregandosubelementoAnterior && <ModalCarregando />}
    </>
  );
};
