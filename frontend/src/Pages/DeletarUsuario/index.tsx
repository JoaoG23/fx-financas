import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { navegarAtePagina } from "../../services/navegarAtePagina";
import { endpoint } from "../../services/endpoint";
import { limparSessaoUsuario } from "../../services/limparSessaoUsuario";
import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";

import { SucessoResposta } from "../../types/Respostas/SucessoResposta";

import ModalQuestiomento from "../../Components/Modais/ModalQuestiomento";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import LightButton from "../../Components/Buttons/LightButton";
import DarkSquareButton from "../../Components/Buttons/DarkButtonSquare";
import ModalSucesso from "../../Components/Modais/ModalSucesso";

const DeletarUsuario: React.FC = () => {
  const navigate = useNavigate();

  const { idConvertido } = buscaDadoUsuarioNaSessao();
  const [sucesso, setSucesso] = useState<SucessoResposta | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  async function deletar() {
    setIsCarregando(true);
    try {
      const sucesso = await endpoint.delete(`/api/users/${idConvertido}`);
      setSucesso(sucesso.data);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsCarregando(false);
      setTimeout(() => {
        limparSessaoUsuario();
        navegarAtePagina(navigate, "/");
      }, 3000);
    }
  }
  return (
    <Container>
      <ModalQuestiomento>
        <p>Tem certeza que quer deletar sua conta nesse aplicativo?</p>
        <div>
          <LightButton
            onClick={() => {
              deletar();
            }}
          >
            <h1>Sim</h1>
          </LightButton>
          <Link to={"/usuario-logado"}>
            <DarkSquareButton>
              <h1>Não</h1>
            </DarkSquareButton>
          </Link>
        </div>
      </ModalQuestiomento>
      {sucesso && (
        <ModalSucesso>
          <p>Sua sessão foi encerrada e seu usuário foi apagado</p>
          <h4>{sucesso?.msg}</h4>
        </ModalSucesso>
      )}
      {error && <ModalErro />}
      {isCarregando && <ModalCarregando />}
    </Container>
  );
};

export default DeletarUsuario;
