import React from "react";
import { Formulario } from "./components/Formulario";
import { Container } from "./styles";

export const AdicionarProgramacaoDuplicada: React.FC = () => {
  return (
    <Container>
      <h2>Novo item programação duplicada</h2>
      <Formulario />
    </Container>
  );
};
