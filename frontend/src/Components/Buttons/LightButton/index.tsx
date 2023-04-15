import React from "react";
import { Light } from "./styles";

type Props = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
};


export const LightButton:React.FC<Props> = ({ onClick,  children }) => {
  return <Light onClick={onClick}>{children}</Light>;
};


