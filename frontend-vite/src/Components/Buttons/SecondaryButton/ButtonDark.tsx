import React from "react";
import { DefaultStyle } from "./styles";

type Props = {
  children?: string | JSX.Element | JSX.Element[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};


export const SecondaryButton:React.FC<Props> = ({ onClick,  children }) => {
  return <DefaultStyle onClick={onClick}>{children}</DefaultStyle>;
};

