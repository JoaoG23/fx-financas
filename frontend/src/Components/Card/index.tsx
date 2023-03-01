import React from "react";
import { CardContainer } from "./styles";

type ChildrensCard = {
    children?: string | JSX.Element | JSX.Element[];
  }
  

const Card :React.FC<ChildrensCard> = ({
    children,
}) => {
    return(<CardContainer>
        { children }
    </CardContainer>)
};

export default Card;