import React from "react";
import { AnimationLoading } from "./styles";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import image from "../../../assets/loading-icon.svg";
type Props = {
  children?: JSX.Element[] | JSX.Element;
  tamanhoSpinner?: number;
};

export const SpinnerCarregamento: React.FC<Props> = ({
  children,
  tamanhoSpinner = 30,
}) => (
  <>
    <div>
      <AnimationLoading src={image} alt="Carregando"></AnimationLoading>
      <p>Carregando .... </p>
    </div>
  </>
);
