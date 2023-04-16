import React from "react";
import * as Modal from "./styles";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  
export const ModalSucesso :React.FC<Props> = ({
    children,
}) => (
        <Modal.BackGround>
            <Modal.Body>
                <BsFillHandThumbsUpFill size={110} color="#1CAF82"/>
                <h3>Operação concluida com sucesso</h3>
                {children}
            </Modal.Body>
        </Modal.BackGround>
);

