import React from "react";
import "react-toastify/dist/ReactToastify.css";


import * as Form from "./styles";
import { InputDefault } from "../../../../../Components/Inputs/InputDefault";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
};

export const VisualizarCamposFormulario: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
}) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.Campos>
        <div>
          <InputDefault
            desativar
            type="text"
            name="descricao"
            register={register}
            label="Nome local"
          />
        </div>
      </Form.Campos>
    </Form.Container>
  );
};
