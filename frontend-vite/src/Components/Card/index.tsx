import React from "react";
import { CardContainer } from "./styles";

type ChildrensCard = {
  children?: string | JSX.Element | JSX.Element[];
  light?: boolean;
};

export const Card: React.FC<ChildrensCard> = ({ children, light }) => {
  return <CardContainer light={light}>{children}</CardContainer>;
};
