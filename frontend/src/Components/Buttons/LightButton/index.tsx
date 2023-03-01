import React from "react";
import { Light } from "./styles";

type Propriedades = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:any;
};


const LightButton:React.FC<Propriedades> = ({ onClick,  children }) => {
  return <Light onClick={onClick}>{children}</Light>;
};

export default LightButton;
