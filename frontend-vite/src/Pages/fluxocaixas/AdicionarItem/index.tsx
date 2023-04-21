import React from "react";
import { Formulario } from "./components/Formulario";


export const AdicionarItem: React.FC = () => {
  return (
    <main>
        <h2>Novo item no fluxocaixa</h2>
        <Formulario />
    </main>
  );
};
