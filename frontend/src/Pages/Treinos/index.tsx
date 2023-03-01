import React from 'react';
import { Link } from "react-router-dom";
import { Container } from "./styles";

import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";
import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";

import { TreinoUsuario } from "../../types/TreinosUsuario";

import Card from "../../Components/Card";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import LightButton from "../../Components/Buttons/LightButton";
import DarkSquareButton from "../../Components/Buttons/DarkButtonSquare";
import TextLimited from '../../Components/TextLimited';

const { idConvertido } = buscaDadoUsuarioNaSessao();
const Treinos:React.FC = () => {

  const {
    dados: treinos,
    isCarregando,
    error,
    setError
  } = useFetch<TreinoUsuario[]>(`/api/training/user/${idConvertido}`, {
    method: "get",
  });
  
  if (error) {
    sumirDepoisTempo(setError);
  }

  return (
    <div>
      <Link to={"/treino/adicionar"}>
        <LightButton>
          <h3>Adicionar +</h3>
        </LightButton>
      </Link>
      <Container>
        {treinos?.map((treino) => (
          <Link to={`/exercicios-treino/${treino?.id}`} key={treino?.id}>
            <Card>
              <section>
                <img src="./assets/bikeSmall.svg" alt="treino"></img>
                <h3>{treino?.title}</h3>
                <TextLimited>{treino?.description}</TextLimited>
              </section>
              <div>
                <LightButton>
                  <Link to={`/treino/deletar/${treino?.id}`}>
                  <h1>✖</h1>
                  </Link>
                </LightButton>
                <DarkSquareButton>
                  <Link to={`/treino/${treino?.id}`}>
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
            <h3>{error?.response?.data?.msg}</h3>
          </ModalErro>
        )}
      </Container>
    </div>
  );
};

export default Treinos;
