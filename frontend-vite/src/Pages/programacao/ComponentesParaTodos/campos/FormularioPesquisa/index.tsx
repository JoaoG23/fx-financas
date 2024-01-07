import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { IoMdListBox } from "react-icons/io";
import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ImSearch } from "react-icons/im";

import * as Form from "./styles";

import { InputDefault } from "../../../../../Components/Inputs/InputDefault";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { GreenCheckBoxRadio } from "../../../../../Components/checkboxs/CheckBoxRadioGreen";
import { RedCheckBoxRadio } from "../../../../../Components/checkboxs/CheckBoxRadioRed";
import { CheckBoxRadioDefault } from "../../../../../Components/checkboxs/CheckBoxRadioDefault";

type Props = {
  onSubmit?: React.FormEventHandler | any;
  register: any;
};

export const FormularioPesquisa: React.FC<Props> = ({ onSubmit, register }) => {
  return (
    <Form.Container role="form" onSubmit={onSubmit}>
      <h2>Formulário pesquisa</h2>
      <Form.ContainerPesquisa>
        <InputDefault
          type="search"
          requirido={false}
          register={register}
          placeholder="Digite as iniciais para pesquisa"
          name="descricao"
          label="Descrição item"
        />

        <SecondaryButton>
          <p>Pesquisar</p>
          <ImSearch color="#fff" size={20} />
        </SecondaryButton>
        <Form.ContainerEntradaSaida>
          <Form.ContainerRadios>
            <CheckBoxRadioDefault
              name="entradaOuSaidaOuTodos"
              register={register}
              defaultValue={"todos"}
            />
            <label>
              Todos
              <IoMdListBox size={20} color="#5968DC" />
            </label>
          </Form.ContainerRadios>
          <Form.ContainerRadios>
            <GreenCheckBoxRadio
              name="entradaOuSaidaOuTodos"
              register={register}
              defaultValue={"entrada"}
            />
            <label>
              Entrada
              <FiArrowUp size={20} color="#1CAF82" />
            </label>
          </Form.ContainerRadios>
          <Form.ContainerRadios>
            <label>
              Saída
              <FiArrowDown size={20} color="#F78187" />
            </label>
            <RedCheckBoxRadio
              name="entradaOuSaidaOuTodos"
              register={register}
              defaultValue={"saida"}
            />
          </Form.ContainerRadios>
        </Form.ContainerEntradaSaida>
      </Form.ContainerPesquisa>
    </Form.Container>
  );
};
