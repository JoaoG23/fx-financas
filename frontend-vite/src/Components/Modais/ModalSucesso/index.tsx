import React from "react";
import * as Modal from "./styles";
import { BsCheckCircleFill } from "react-icons/bs";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

export const ModalSucesso: React.FC<Props> = ({ children }) => (
  <Modal.BackGround>
    <Modal.Body>
      <BsCheckCircleFill size="150" color="#2ecc71" />
      <h3>Operação concluida com sucesso</h3>
      {children}
    </Modal.Body>
  </Modal.BackGround>
);
