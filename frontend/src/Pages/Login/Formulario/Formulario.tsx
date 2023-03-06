import React from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalCarregando from "../../../Components/Modais/ModalCarregando";
import { navegarAtePaginaDepoisTempo } from "../../../services/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";
import { logarUsuario } from "../api";
import { CamposFormulario } from "./CamposFormulario/CamposFormulario";
import { FormularioStyle } from "./styles";


export const Formulario: React.FC = () => {

	const navigate= useNavigate()

	const { mutate, isLoading } = useMutation(
		async (value: any) => await logarUsuario(value),
		{
			onError: (error: any) => {
				toast.error(`Ops! Houve um error: ${error.response.data}`);
			},
			onSuccess: () => {
				toast.success('Login Realizado com sucesso')
				navegarAtePaginaDepoisTempo(navigate,'/dash')
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
	  {isLoading && <ModalCarregando/>}
    </FormularioStyle>
  );
};
