import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";
import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import RedFont from "../../../../../Components/FontColor/RedFont";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { ElementoSelect } from "../../../../../Components/selects/ElementoSelect";

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
        <Form.PrimeiraLinha>
          <div>
            <InputDefault
              placeholder="Digite descrição do item..."
              type="text"
              name="descricao"
              register={register}
              label="Descrição"
            />
            {errors?.descricao?.type === "required" && (
              <RedFont>
                Campo tipo vazio! Por gentileza preencher-o!{" "}
                <BsFillEmojiExpressionlessFill />
              </RedFont>
            )}
          </div>
          <div>
            <ElementoSelect
              name="elementosId"
              register={register}
              label="Elemento"
            />
            {errors?.elementosId?.type === "required" && (
              <RedFont>
                Campo elemento vazio! Por gentileza preencher-o!{" "}
                <BsFillEmojiExpressionlessFill />
              </RedFont>
            )}
          </div>
        </Form.PrimeiraLinha>
        <Form.SegundaLinha>
          <div>
            <InputDefault
              placeholder="Digite descrição do item..."
              type="text"
              name="descricao"
              register={register}
              label="Descrição"
            />
            {errors?.descricao?.type === "required" && (
              <RedFont>
                Campo tipo vazio! Por gentileza preencher-o!{" "}
                <BsFillEmojiExpressionlessFill />
              </RedFont>
            )}
          </div>
          <div>
            <InputDefault
              placeholder="Digite descrição do item..."
              type="text"
              name="descricao"
              register={register}
              label="Descrição"
            />
            {errors?.descricao?.type === "required" && (
              <RedFont>
                Campo tipo vazio! Por gentileza preencher-o!{" "}
                <BsFillEmojiExpressionlessFill />
              </RedFont>
            )}
          </div>
        </Form.SegundaLinha>
        <Form.TeceiraLinha>
          <div>
            <InputDefault
              placeholder="Digite descrição do item..."
              type="text"
              name="descricao"
              register={register}
              label="Descrição"
            />
            {errors?.descricao?.type === "required" && (
              <RedFont>
                Campo tipo vazio! Por gentileza preencher-o!{" "}
                <BsFillEmojiExpressionlessFill />
              </RedFont>
            )}
          </div>
          <div>
            <InputDefault
              placeholder="Digite descrição do item..."
              type="text"
              name="descricao"
              register={register}
              label="Descrição"
            />
            {errors?.descricao?.type === "required" && (
              <RedFont>
                Campo tipo vazio! Por gentileza preencher-o!{" "}
                <BsFillEmojiExpressionlessFill />
              </RedFont>
            )}
          </div>
          <div>
            <InputDefault
              placeholder="Digite descrição do item..."
              type="text"
              name="descricao"
              register={register}
              label="Descrição"
            />
            {errors?.descricao?.type === "required" && (
              <RedFont>
                Campo tipo vazio! Por gentileza preencher-o!{" "}
                <BsFillEmojiExpressionlessFill />
              </RedFont>
            )}
          </div>
        </Form.TeceiraLinha>
      </Form.Campos>
      <footer>
        <SecondaryButton>Salvar + </SecondaryButton>
      </footer>
    </Form.Container>
  );
};
