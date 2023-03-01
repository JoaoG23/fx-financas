import React from "react";
import { ModalStyle, ModalBackgroundStyle, AnimationSucesso } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  

const ModalSucesso :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <AnimationSucesso src="/assets/success.svg" alt="success"/>
                <h3>Operação concluida com sucesso</h3>
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalSucesso;