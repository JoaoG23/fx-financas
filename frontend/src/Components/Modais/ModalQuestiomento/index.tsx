import React from "react";
import { ModalStyle, ModalBackgroundStyle } from "./styles";

type Props = {
    children?: JSX.Element[] | JSX.Element;
  }
  

const ModalQuestiomento :React.FC<Props> = ({
    children,
}) => (
        <ModalBackgroundStyle>
            <ModalStyle>
                <img src="/assets/question.svg" alt="question"></img>
                <h4>Tem certeza que quer realizar a operacão</h4>
                { children }
            </ModalStyle>
        </ModalBackgroundStyle>
);

export default ModalQuestiomento;