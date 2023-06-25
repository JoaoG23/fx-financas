import React from "react";
import "react-toastify/dist/ReactToastify.css";


import * as Form from "./styles";

import { BsFillEmojiExpressionlessFill } from "react-icons/bs";


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
            placeholder="Digite o Nome Completo.."
            type="text"
            name="nome"
            register={register}
            label="Nome Completo"
          />
          {errors?.nome?.type === "required" && (
            <RedFont>
              Nome Completo vazio! Por gentileza preencher-o!
              <BsFillEmojiExpressionlessFill />
            </RedFont>
          )}
        </div>

        <div>
          <InputDefault
            placeholder="Digite o Nome de Usuário.."
            type="text"
            name="username"
            register={register}
            label="Nome de Usuário"
          />
          {errors?.username?.type === "required" && (
            <RedFont>
              Nome de Usuário vazio! Por gentileza preencher-o!
              <BsFillEmojiExpressionlessFill />
            </RedFont>
          )}
        </div>


        <div>
          <InputDefault
            placeholder="Digite o E-mail.."
            type="text"
            name="email"
            register={register}
            label="E-mail"
          />
          {errors?.email?.type === "required" && (
            <RedFont>
              E-mail vazio! Por gentileza preencher-o!
              <BsFillEmojiExpressionlessFill />
            </RedFont>
          )}
        </div>

        <div>
          <InputDefault
            placeholder="Digite o Telefone.."
            type="text"
            name="telefone"
            register={register}
            label="Telefone"
          />
          {errors?.telefone?.type === "required" && (
            <RedFont>
              Telefone vazio! Por gentileza preencher-o!
              <BsFillEmojiExpressionlessFill />
            </RedFont>
          )}
        </div>
      </Form.Campos>
      <footer>
        {/* <SecondaryButton>Salvar + </SecondaryButton> */}
      </footer>
    </Form.Container>
  );
};
