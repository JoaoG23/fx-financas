import React from "react";
import "react-toastify/dist/ReactToastify.css";

import { InputDefault } from "../../../../../../Components/Inputs/InputDefault";

import * as Form from "./styles";
import { SecondaryButton } from "../../../../../../Components/Buttons/SecondaryButton/ButtonDark";

import RedFont from "../../../../../../Components/FontColor/RedFont";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
};

export const CamposFormulario: React.FC<Props> = ({
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
            placeholder="Digite nome do subtipo..."
            type="text"
            name="descricao"
            register={register}
            label="Descrição"
          />
          {errors?.descricao?.type === "required" && (
            <RedFont>
              Campo subtipo vazio! Por gentileza preencher-o!{" "}
              <BsFillEmojiExpressionlessFill />
            </RedFont>
          )}
        </div>
      </Form.Campos>
      <footer>
        <SecondaryButton>Salvar + </SecondaryButton>
      </footer>
    </Form.Container>
  );
};
