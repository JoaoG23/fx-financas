import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, AzulFont } from "./styles";

import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";

import { ExerciciosUsuario } from "../../types/ExerciciosUsuario";

import Card from "../../Components/Card";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import LightButton from "../../Components/Buttons/LightButton";
import DarkSquareButton from "../../Components/Buttons/DarkButtonSquare";

const ExerciciosDoTreino: React.FC = () => {
  const { id } = useParams();

  const {
    dados: exercicios,
    isCarregando,
    error,
    setError,
  } = useFetch<ExerciciosUsuario[]>(`/api/exercice/training/${id}`, {
    method: "get",
  });

  if (error) {
    sumirDepoisTempo(setError);
  }

  return (
    <div>
      <Link to={`/exercicio/adicionar/${id}`}>
        <LightButton>
          <h3>Adicionar +</h3>
        </LightButton>
      </Link>
      <Container>
        {exercicios?.map((exercicio) => (
          <Link to={`/exercicio/${exercicio?.id}`} key={exercicio?.id}>
            <Card>
              <section>
                <img src="/assets/machine.svg" alt="treino"></img>
                <h4>{exercicio?.description}</h4>
                <h3>
                  Levantando <AzulFont>{exercicio?.weight} Kgs</AzulFont>
                </h3>
              </section>
              <div>
                <LightButton>
                  <Link to={`/exercicio/deletar/${exercicio?.id}`}>
                    <h1>✖</h1>
                  </Link>
                </LightButton>
                <DarkSquareButton>
                  <Link to={`/exercicio/editar/${exercicio?.id}`}>
                    <h1>✎</h1>
                  </Link>
                </DarkSquareButton>
              </div>
            </Card>
          </Link>
        ))}
        {isCarregando && <ModalCarregando />}
        {error && (
          <ModalErro>
            <p>{error?.response?.data?.msg}</p>
          </ModalErro>
        )}
      </Container>
    </div>
  );
};

export default ExerciciosDoTreino;
