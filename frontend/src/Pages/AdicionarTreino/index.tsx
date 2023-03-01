import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { buscaDadoUsuarioNaSessao } from "../../services/buscaDadoUsuarioNaSessao";
import { endpoint } from "../../services/endpoint";
import { navegarAtePagina } from "../../services/navegarAtePagina";

import { SucessoResposta } from "../../types/Respostas/SucessoResposta";

import { Container, Input, Form, InputHidden } from "./styles";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import RedFont from "../../Components/FontColor/RedFont";

const AdicionarTreino: React.FC = () => {
  const navigate = useNavigate();

  const [sucesso, setSucesso] = useState<SucessoResposta | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { idConvertido } = buscaDadoUsuarioNaSessao();

  async function adicionar(body:object) {
    setIsCarregando(true);
    try {
      const sucesso = await endpoint.post(`/api/training`, body);
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
      <Form
        onSubmit={handleSubmit(async (body: object) => await adicionar(body))}
      >
        <div>
        <h2>Adicionar Treino</h2>
        <p>Preenchar os dados abaixo para criar o seu treino</p>
        </div>
        <InputHidden
          type="number"
          value={idConvertido}
          placeholder={"Usuário"}
          {...register("userId", { required: true })}
        ></InputHidden>
        <Input
          type="text"
          placeholder={"Titulo do Treino"}
          {...register("title", { required: true })}
        ></Input>
        {errors.title?.type === "required" && (
          <RedFont>Titulo está vazio! Preencha por gentileza</RedFont>
        )}
        <Input
          type="text"
          placeholder={"Descricão do treino"}
          {...register("description", { required: true })}
        ></Input>
        {errors.description?.type === "required" && (
          <RedFont>Descrição está vazia! Preencha por gentileza</RedFont>
        )}
        <DarkButton>Salvar</DarkButton>
      </Form>
      {sucesso && (
        <ModalSucesso>
          <h4>{sucesso?.msg}</h4>
        </ModalSucesso>
      )}
      {isCarregando && <ModalCarregando />}
      {error && <ModalErro>{error?.response?.data?.msg}</ModalErro>}
    </Container>
  );
};

export default AdicionarTreino;
