import React from "react";
import { AnimationLoading } from "./styles";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

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
      <AnimationLoading src="" alt="Carregando">
      </AnimationLoading>
      <h4>Carregando .... </h4>
    </div>
  </>
);
