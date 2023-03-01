import React from "react";
import { DarkSquare } from "./styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};


const DarkSquareButton:React.FC<Propriedades> = ({ onClick,  children }) => {
  return <DarkSquare onClick={onClick}>{children}</DarkSquare>;
};

export default DarkSquareButton;
