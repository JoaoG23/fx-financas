import React from "react";
import "react-toastify/dist/ReactToastify.css";

import * as Form from "./styles";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";
import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import RedFont from "../../../../../Components/FontColor/RedFont";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { SublementoSelect } from "../../../../../Components/selects/SubelementoSelect";
import { ElementoSelect } from "../../../../../Components/selects/ElementoSelect";
import { useElementoStore } from "../../../../../stores/useElementoStore/useElementoStore";

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

  const elemento = useElementoStore((state) => state?.elemento!);

  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <Form.Campos>
        <Form.PrimeiraLinha>
          <div>
            <ElementoSelect
              control={control}
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
            <SublementoSelect
              elementosId={elemento?.value!}
              control={control}
              name="subelementosId"
              register={register}
              label={elemento?.label}
            />
            {errors?.subelementosId?.type === "required" && (
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
        <Form.SegundaLinha>
          <div>
            <h4></h4>
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
          {/* <div>
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
          </div> */}
        </Form.TeceiraLinha>
      </Form.Campos>
      <footer>
        <SecondaryButton>Salvar + </SecondaryButton>
      </footer>
    </Form.Container>
  );
};
