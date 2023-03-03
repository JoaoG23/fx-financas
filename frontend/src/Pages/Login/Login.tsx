import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

// Components
import {
  LoginContainer,
  ContainerMain,
} from "./styles";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";

// Services
import { endpoint } from "../../services/endpoint";
import { inserirDadosUsuarioNaSessao } from "../../services/inserirDadosUsuarioNaSessao";
import RedFont from "../../Components/FontColor/RedFont";
import { Formulario } from "./Formulario/Formulario";
// Tipagens

const Login: React.FC = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
  return (
    <ContainerMain>
      <LoginContainer>
        <h4>Login</h4>
        <Formulario />
      </LoginContainer>
    </ContainerMain>
  );
};

export default Login;
