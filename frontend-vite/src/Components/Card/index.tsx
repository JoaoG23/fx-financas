import React from "react";
import { CardContainer } from "./styles";

type ChildrensCard = {
    children?: string | JSX.Element | JSX.Element[];
    
  }
  

export const Card :React.FC<ChildrensCard> = ({
    children,
}) => {
    return(<CardContainer >
        { children }
    </CardContainer>)
};

