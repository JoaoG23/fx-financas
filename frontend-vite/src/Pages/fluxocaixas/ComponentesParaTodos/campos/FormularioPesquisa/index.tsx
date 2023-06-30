import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ImSearch } from "react-icons/im";

import * as Form from "./styles";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
  control: any;
  errors: any;
};

export const FormularioPesquisa: React.FC<Props> = ({
  onSubmit,
  register,
  control,
  errors,
}) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <h2>Formulário pesquisa</h2>
      <Form.ContainerPesquisa>
        <InputDefault
          requirido={false}
          register={register}
          placeholder="Digite a descrição para efetuar a pesquisa"
          name="descricao"
          label="Descrição Item"
        />
        <SecondaryButton>
          <p>Pesquisar</p>
          <ImSearch color="#fff" size={20} />
        </SecondaryButton>
      </Form.ContainerPesquisa>
    </Form.Container>
  );
};
