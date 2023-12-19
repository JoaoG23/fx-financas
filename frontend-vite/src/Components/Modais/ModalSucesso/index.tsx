import React from "react";
import * as Modal from "./styles";

import sucessoIcon from "../../../assets/ok.svg";

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

export const ModalSucesso: React.FC<Props> = ({ children }) => (
  <Modal.BackGround>
    <Modal.Body>
      <Modal.AnimationSucesso src={sucessoIcon}/>
      <Modal.Title>Operação concluida com sucesso</Modal.Title>
      {children}
    </Modal.Body>
  </Modal.BackGround>
);
