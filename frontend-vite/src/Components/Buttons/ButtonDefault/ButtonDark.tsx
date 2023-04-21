import React from "react";
import { DefaultStyle } from "./styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};


const ButtonDefault:React.FC<Propriedades> = ({ onClick,  children }) => {
  return <DefaultStyle onClick={onClick}>{children}</DefaultStyle>;
};

export default ButtonDefault;
