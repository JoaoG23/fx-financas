import React from "react";
import { Dark } from "./styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};


const DarkButton:React.FC<Propriedades> = ({ onClick,  children }) => {
  return <Dark onClick={onClick}>{children}</Dark>;
};

export default DarkButton;
