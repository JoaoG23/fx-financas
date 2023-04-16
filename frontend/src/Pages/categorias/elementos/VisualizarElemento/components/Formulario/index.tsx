import { useParams } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import { ModalCarregando } from "../../../../../../Components/Modais/ModalCarregando";

import * as Visualizar from "./styles";
import { buscarUmElementoPorId } from "../../api";

export const Formulario: React.FC = () => {
  const { id } = useParams();

  const { isLoading: isCarregandoElementoAnterior, data } = useQuery(
    ["ver-um-elemento", id],
    () => buscarUmElementoPorId(id!),
    {
      onError: (error: any) => {
        toast.error(`Houve um error: ${error.response.data}`);
      },
    }
  );

  const elemento = data?.data;

  return (
    <Visualizar.Container>
      <h4>Descrição do item : {elemento?.descricao}</h4>
      {isCarregandoElementoAnterior && <ModalCarregando />}
    </Visualizar.Container>
  );
};
