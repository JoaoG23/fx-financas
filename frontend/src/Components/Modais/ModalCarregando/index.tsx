import React from "react";
import { ModalStyle, ModalBackgroundStyle, AnimationLoading } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  

const ModalCarregando :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <AnimationLoading src="./assets/pesosCarregamento.svg" alt="loading"/>
                <h4>Carregando .... </h4>
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalCarregando;