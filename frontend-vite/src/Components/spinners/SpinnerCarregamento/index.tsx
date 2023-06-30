import React from "react";
import { Container, AnimationLoading } from "./styles";

import image from "../../../assets/loading-icon.svg";

export const SpinnerCarregamento: React.FC = () => (
  <>
    <Container>
      <AnimationLoading src={image} alt="Carregando" />
      <p>Carregando .. </p>
    </Container>
  </>
);
