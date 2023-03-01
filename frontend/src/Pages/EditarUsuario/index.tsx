import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { endpoint } from "../../services/endpoint";
import { navegarAtePagina } from "../../services/navegarAtePagina";
import { useFetch } from "../../services/api";
import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";

import { SucessoResposta } from "../../types/Respostas/SucessoResposta";
import { Usuario } from "../../types/Usuario";

import { Container, Input, Form } from "./styles";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import RedFont from "../../Components/FontColor/RedFont";

const EditarUsuario: React.FC = () => {
  const navigate = useNavigate();
  const { idConvertido, nomeUsuario } = buscaDadoUsuarioNaSessao();

  const [sucesso, setSucesso] = useState<SucessoResposta | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);
  
    const {
      register,
      handleSubmit,
      reset,
      watch,
      formState: { errors },
    } = useForm();

  const {
    dados: dadosAntigos,
    isCarregando: isCarregandoDadosAntigos,
    error: dadosAntigosError,
  } = useFetch<Usuario>(`/api/users/${idConvertido}`, {
    method: "get",
  });

  useEffect(() =>{
    reset(dadosAntigos as Usuario);
  },[dadosAntigos])

  const phoneValue = watch('phonenumber');
  console.log(phoneValue);

  async function editar(body: object) {
    setIsCarregando(true);
    try {
      const sucesso = await endpoint.put(`/api/users/${idConvertido}`, body);
      setSucesso(sucesso.data);
      console.log(sucesso.data);
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
      <Form onSubmit={handleSubmit(async (body: object) => await editar(body))}>
        <div>
          <h2>Ei! Veja aqui os seus dados {nomeUsuario}</h2>
          <p>Se quizer mudar alguma coisa basta alterar um campo!</p>
        </div>
        <Input
          type="text"
          placeholder={"Seu nome"}
          {...register("name", { required: true })}
        ></Input>
        {errors.name?.type === "required" && (
          <RedFont>Seu nome está vazio! Preencha por gentileza</RedFont>
        )}
        <Input
          type="text"
          placeholder={"Seu email"}
          {...register("email", { required: true })}
        ></Input>
        {errors.email?.type === "required" && (
          <RedFont>E-mail está vazio! Preencha por gentileza</RedFont>
        )}
        <Input
          type="text"
          placeholder={"Seu número de Telefone"}
          {...register("phonenumber", { required: true })}
        ></Input>
        {errors.phonenumber?.type === "required" && (
          <RedFont>Telefone está vazio! Preencha por gentileza</RedFont>
        )}
        <Input
          type="text"
          placeholder={"Seu Usuário para login"}
          {...register("userName", { required: true })}
        ></Input>
        {errors.userName?.type === "required" && (
          <RedFont>Seu usuário está vazio! Preencha por gentileza</RedFont>
        )}
        <DarkButton>Salvar</DarkButton>
        {/* <Link to={'/usuario-logado/deletar'}>Encerrar Conta</Link> */}
      </Form>

      {/* ---- Resposta da busca dos dados Antigos */}
      {isCarregandoDadosAntigos && <ModalCarregando />}
      {dadosAntigosError && (
        <ModalErro>{dadosAntigosError?.response?.data?.msg}</ModalErro>
      )}

      {/* ---- Resposta do Atualizacao */}
      {sucesso && <ModalSucesso />}
      {isCarregando && <ModalCarregando />}
      {error && <ModalErro>{error?.response?.data?.msg}</ModalErro>}
    </Container>
  );
};

export default EditarUsuario;
