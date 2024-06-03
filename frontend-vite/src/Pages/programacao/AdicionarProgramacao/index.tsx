import React from "react";
import { Formulario } from "./components/Formulario";
import { Container } from "./styles";

export const AdicionarProgramacao: React.FC = () => {
  return (
    <Container>
      <h2>Novo item programação</h2>
      <Formulario />
    </Container>
  );
};
