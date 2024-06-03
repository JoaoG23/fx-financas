import React from "react";
import { Formulario } from "./components/Formulario";
import { Container } from "./styles";

export const EditarProgramacao: React.FC = () => {
  return (
    <Container>
      <h2>Editar Programação</h2>
      <Formulario />
    </Container>
  );
};
