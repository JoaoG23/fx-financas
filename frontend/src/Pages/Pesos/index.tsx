import React from "react";
import { Container } from "./styles";

import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";

import { Pesos } from "../../types/Pesos";

import Card from "../../Components/Card";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";

const PesosUtilizados: React.FC = () => {
  const {
    dados: pesos,
    isCarregando,
    error,
    setError,
  } = useFetch<Pesos[]>(`/api/weights`, {
    method: "get",
  });

  if (error) {
    sumirDepoisTempo(setError);
  }

  return (
    <div>
      <Container>
        {pesos?.map((peso) => (
          <Card key={peso?.id}>
            <h2>{peso?.weight} Kgs</h2>
            <img src="./assets/pesoSmaller.svg" alt="treino"></img>
          </Card>
        ))}
        {isCarregando && <ModalCarregando />}
        {error && (
          <ModalErro>
            <h3>{error?.response?.data?.msg}</h3>
          </ModalErro>
        )}
      </Container>
    </div>
  );
};

export default PesosUtilizados;
