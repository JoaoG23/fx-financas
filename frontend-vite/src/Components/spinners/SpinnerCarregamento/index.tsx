import React from "react";
import { AnimationLoading } from "./styles";

import image from "../../../assets/loading-icon.svg";

export const SpinnerCarregamento: React.FC = () => (
  <>
    <div>
      <AnimationLoading src={image} alt="Carregando"></AnimationLoading>
      <p>Carregando .... </p>
    </div>
  </>
);
