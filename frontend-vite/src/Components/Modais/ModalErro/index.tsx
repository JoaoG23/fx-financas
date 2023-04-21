import React from "react";
import { ModalStyle, ModalBackgroundStyle, AnimationErro } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  

const ModalErro :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <AnimationErro src="/assets/error.svg" alt="error"/>
                <h3>Ops! Há algo errado na operação</h3>
                {children}
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalErro;