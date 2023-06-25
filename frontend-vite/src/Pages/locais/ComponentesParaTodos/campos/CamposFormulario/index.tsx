import React from "react";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";

import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import RedFont from "../../../../../Components/FontColor/RedFont";
import { InputDefault } from "../../../../../Components/Inputs/InputDefault";

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
            placeholder="Digite nome do local.."
            type="text"
            name="descricao"
            register={register}
            label="Nome local"
          />
          {errors?.descricao?.type === "required" && (
            <RedFont>
              Campo local vazio! Por gentileza preencher-o!{" "}
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
