import React from "react";
import * as Modal from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  

export const ModalCarregando :React.FC<Props> = ({
    children,
}) => (
        <Modal.BackGround>
            <Modal.Body>
                {/* <AnimationLoading src="./assets/pesosCarregamento.svg" alt="loading"/> */}
                <h4>Carregando .... </h4>
            </Modal.Body>
        </Modal.BackGround>
);
