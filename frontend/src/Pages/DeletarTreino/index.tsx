import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { Container } from "./styles";

import { navegarAtePagina } from "../../services/navegarAtePagina";
import { endpoint } from "../../services/endpoint";

import { SucessoResposta } from "../../types/Respostas/SucessoResposta";

import ModalQuestiomento from "../../Components/Modais/ModalQuestiomento";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import LightButton from "../../Components/Buttons/LightButton";
import DarkSquareButton from "../../Components/Buttons/DarkButtonSquare";
import ModalSucesso from "../../Components/Modais/ModalSucesso";

const DeletarTreino: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [sucesso, setSucesso] = useState<SucessoResposta | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  async function deletar() {
    setIsCarregando(true);
    try {
      const sucesso = await endpoint.delete(`/api/training/${id}`);
      setSucesso(sucesso.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsCarregando(false);
      setTimeout(() => {
        navegarAtePagina(navigate, "/treino");
      }, 3000);
    }
  }
  return (
    <Container>
      <ModalQuestiomento>
        <div>
          <LightButton
            onClick={() => {
              deletar();
            }}
          >
            <h1>Sim</h1>
          </LightButton>
          <Link to={"/treino"}>
            <DarkSquareButton>
              <h1>Não</h1>
            </DarkSquareButton>
          </Link>
        </div>
      </ModalQuestiomento>
      {sucesso && (
        <ModalSucesso>
          <h4>{sucesso?.msg}</h4>
        </ModalSucesso>
      )}
      {error && <ModalErro />}
      {isCarregando && <ModalCarregando />}
    </Container>
  );
};

export default DeletarTreino;
