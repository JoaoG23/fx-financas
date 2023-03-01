import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import {
  RegisterContainer,
  LoginContainer,
  Form,
  ContainerMain,
  Input,
} from "./styles";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";

// Services
import { endpoint } from "../../services/endpoint";
import { inserirDadosUsuarioNaSessao } from "../../services/inserirDadosUsuarioNaSessao";
import RedFont from "../../Components/FontColor/RedFont";
// Tipagens

const Login: React.FC = () => {
  const navigate = useNavigate();
  // Auxiliars
  function sumirModais(setadorModais: any) {
    setTimeout(() => {
      setadorModais(null);
    }, 3000);
  }
  function navegarAtePagina(caminho: string) {
    setTimeout(() => {
      window.location.assign(caminho);
    }, 3000);
  }

  const [dados, setDados] = useState<any | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  async function login(data: object) {
    setIsCarregando(true);
    try {
      const response = await endpoint.post("/api/auth/login", data);

      setDados(response.data);

      const { tokenUser, userData } = response.data;
      inserirDadosUsuarioNaSessao(userData.id, userData.name, tokenUser);

      sumirModais(setDados);
      navegarAtePagina("/dashboard");
    } catch (error) {
      setError(error);
      sumirModais(setError);

      console.error(error);
    } finally {
      setIsCarregando(false);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <ContainerMain>
      <LoginContainer>
        <div>
          <img width={"200px"} src="./assets/logo.png" alt="logo"></img>
        </div>
        <Form
          onSubmit={handleSubmit(async (body: object) => await login(body))}
        >
          <Input
            type="text"
            placeholder={"Usuário"}
            {...register("userName", { required: true })}
          ></Input>
          {errors.userName?.type === "required" && (
            <RedFont>Usuario vazio! Preencha por por gentileza</RedFont>
          )}
          <Input
            type="password"
            placeholder={"Senha"}
            {...register("password", { required: true })}
          ></Input>
          {errors.password?.type === "required" && (
            <RedFont>Senha vazia! Preencha por por gentileza</RedFont>
          )}
          <DarkButton>login</DarkButton>
        </Form>
        <RegisterContainer>
          {dados && <ModalSucesso>{dados?.msg}</ModalSucesso>}
          {isCarregando && <ModalCarregando />}
          {error && <ModalErro>{error?.response?.data?.msg}</ModalErro>}
          <Link to={"/esqueci-senha"}>Esqueceu seu senha? Clique aqui</Link>
          <DarkButton onClick={() => navigate("/registrar")}>
            Registrar-se
          </DarkButton>
        </RegisterContainer>
      </LoginContainer>
    </ContainerMain>
  );
};

export default Login;
