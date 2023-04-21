import React from "react";

import * as Modal from "./styles";
import { BsFillQuestionCircleFill } from "react-icons/bs";

type Props = {
  children?: JSX.Element | JSX.Element[];
};
export const QuestionamentoModal: React.FC<Props> = ({ children }) => {
  return (
    <Modal.BackGround>
      <Modal.Body>
        <BsFillQuestionCircleFill size={100} color="#f58619" />
        <h3>Tem certeza que deseja realizar essa operação!</h3>
        {children}
      </Modal.Body>
    </Modal.BackGround>
  );
};
