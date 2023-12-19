import React from "react";
import { Container, AnimationLoading } from "./styles";

import image from "../../../assets/loading-icon-larger-green.svg";

export const SpinnerCarregamentoGrande: React.FC = () => (
    <Container>
      <AnimationLoading src={image} alt="Carregando" />
      <h3>Carregando .. </h3>
    </Container>
);
