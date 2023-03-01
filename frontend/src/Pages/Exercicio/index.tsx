import React from "react";
import { useParams } from "react-router-dom";
import { Container, CardAzul, ContainerGrafico } from "./styles";

import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";

import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";
import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";

import { ExerciciosUsuario } from "../../types/ExerciciosUsuario";
import AreaGraficoMostraUltima3Evolucoes from "./AreaGrafico";

const Exercicio: React.FC = () => {
  const { id } = useParams();
  const { idConvertido } = buscaDadoUsuarioNaSessao();

  const {
    dados: exercicio,
    isCarregando: isCarregandoExercicios,
    error: exerciciosError,
    setError: setErrorExercicios,
  } = useFetch<ExerciciosUsuario>(`/api/exercice/${id}`, {
    method: "get",
  });

  if (exerciciosError) {
    sumirDepoisTempo(setErrorExercicios);
  }

  return (
    <Container>
      <h2>{exercicio?.description}</h2>
      <CardAzul>
        <div>
          <h3>Sua Carga atual</h3>
          <h1>{exercicio?.weight} Kg</h1>
        </div>
        <img src="/assets/pesosColor.svg" alt="pesos"></img>
      </CardAzul>
      <ContainerGrafico>
        <h3>Evolução dos Pesos</h3>
        <div>
          <AreaGraficoMostraUltima3Evolucoes
            userId={idConvertido}
            exerciceId={id}
          />
        </div>
      </ContainerGrafico>

      {/* Dados Exercicio */}
      {isCarregandoExercicios && <ModalCarregando />}
      {exerciciosError && (
        <ModalErro>
          <p>{exerciciosError?.response?.data?.msg}</p>
        </ModalErro>
      )}
    </Container>
  );
};

export default Exercicio;
