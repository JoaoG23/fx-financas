import React from "react";

import * as Modal from "./styles";
import { BsExclamationCircleFill } from "react-icons/bs";

type Props = {
  children?: any;
};
export const QuestionamentoModal: React.FC<Props> = ({ children }) => {
  return (
    <Modal.BackGround>
      <Modal.Body>
        <BsExclamationCircleFill
          size={"120px"}
          color="#f58619"
        ></BsExclamationCircleFill>
        <h3>Tem certeza que deseja realizar essa operação!</h3>
        {children}
      </Modal.Body>
    </Modal.BackGround>
  );
};
