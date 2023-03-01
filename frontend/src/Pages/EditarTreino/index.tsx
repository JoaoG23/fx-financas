import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { endpoint } from "../../services/endpoint";
import { navegarAtePagina } from "../../services/navegarAtePagina";
import { useFetch } from "../../services/api";

import { SucessoResposta } from "../../types/Respostas/SucessoResposta";

import { Container, Input, Form } from "./styles";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import RedFont from "../../Components/FontColor/RedFont";
import { TreinoUsuario } from "../../types/TreinosUsuario";

const EditarTreino: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [sucesso, setSucesso] = useState<SucessoResposta | null>(null);
  const [isCarregando, setIsCarregando] = useState(false);
  const [error, setError] = useState<any | null>(null);

  const {
    dados: dadosAntigos,
    isCarregando: isCarregandoDadosAntigos,
    error: dadosAntigosError,
  } = useFetch<TreinoUsuario>(`/api/training/${id}`, {
    method: "get",
  });

  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  
  useEffect(() =>{
    reset(dadosAntigos as TreinoUsuario);
  },[dadosAntigos])
  
  async function editar(body: object) {
    setIsCarregando(true);
    try {
      const sucesso = await endpoint.put(`/api/training/${id}`, body);
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
          <h2>Editar o {id}° treino</h2>
          <p>Preenchar os dados abaixo para editar o seu treino</p>
        </div>
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

export default EditarTreino;
