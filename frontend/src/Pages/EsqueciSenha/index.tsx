import { useNavigate } from "react-router-dom";
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
import RedFont from "../../Components/FontColor/RedFont";
import { navegarAtePagina } from "../../services/navegarAtePagina";
// Tipagens

const EsqueciSenha: React.FC = () => {

  const navigate = useNavigate();
  // Auxiliars
  function sumirModais(setadorModais: any) {
    setTimeout(() => {
      setadorModais(null);
    }, 3000);
  }

  const [dados, setDados] = useState<any | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  async function resgatarSenha(data: object) {
    setIsCarregando(true);
    try {
      const response = await endpoint.put("/api/auth/forgetpassword", data);

      setDados(response.data);
      sumirModais(setDados);
      
      setTimeout(() => {
        navegarAtePagina(navigate, "/");
      }, 4000);

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
      <div></div>
      <LoginContainer>
        <div>
          <img width={"200px"} src="./assets/logo.png" alt="logo"></img>
        </div>
        <Form
          onSubmit={handleSubmit(async (body: object) => await resgatarSenha(body))}
        >
          <Input
            type="text"
            placeholder={"Digite aqui o seu e-mail"}
            {...register("email", { required: true } )}
            
          ></Input>
          {errors.email?.type === "required" && (
            <RedFont>O email não pode ser vazio! Preencha por por gentileza</RedFont>
          )}
          <Input
            type="password"
            placeholder={"Digite sua nova senha "}
            {...register("password", { required: true })}
          ></Input>
          <Input
            type="password"
            placeholder={"Digite senha novamente"}
            {...register("password", { required: true })}
          ></Input>
          {errors.password?.type === "required" && (
            <RedFont>Senha vazia! Preencha por por gentileza</RedFont>
          )}
          <DarkButton>Enviar</DarkButton>
        </Form>
        <RegisterContainer>
          {dados && <ModalSucesso>{dados?.msg}</ModalSucesso>}
          {isCarregando && <ModalCarregando />}
          {error && <ModalErro>{error?.response?.data?.msg}</ModalErro>}
          <p>Voltar para tela login</p>
          <DarkButton onClick={ () => navigate('/') }>Voltar</DarkButton>
        </RegisterContainer>
      </LoginContainer>
    </ContainerMain>
  );
};

export default EsqueciSenha;
