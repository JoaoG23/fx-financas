import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { endpoint } from "../../services/endpoint";
import { navegarAtePagina } from "../../services/navegarAtePagina";
import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";

import { SucessoResposta } from "../../types/Respostas/SucessoResposta";
import { Pesos } from "../../types/Pesos";

import { Container, Input, Form, InputHidden, Select } from "./styles";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import RedFont from "../../Components/FontColor/RedFont";

const AdicionarExercicio: React.FC = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [sucessoAdicionar, setSucessoAdicionar] =
    useState<SucessoResposta | null>(null);
  const [isCarregandoAdicionar, setIsCarregandoAdicionar] = useState(false);
  const [errorAdicionar, setErrorAdicionar] = useState<any | null>(null);

  const {
    dados: pesos,
    isCarregando: isCarregandoPesos,
    error: errorPesos,
    setError: setErrorPesos,
  } = useFetch<Pesos[] | null>(`/api/weights`, {
    method: "get",
  });


  if (errorPesos) {
    sumirDepoisTempo(setErrorPesos);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function adicionar(body: object) {
    setIsCarregandoAdicionar(true);
    try {
      const sucesso = await endpoint.post(`/api/exercice`, body);
      setSucessoAdicionar(sucesso.data);
    } catch (error) {
      setErrorAdicionar(error);
      console.log(error);
    } finally {
      setIsCarregandoAdicionar(false);
      setTimeout(() => {
        navegarAtePagina(navigate, -1);
      }, 3000);
    }
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(async (body: object) => await adicionar(body))}
      >
        <div>
          <h2>Adicionar Exercicios</h2>
          <p>Preenchar os dados abaixo para criar o seu exercicio</p>
        </div>
        <InputHidden
          type="number"
          value={id}
          placeholder={"id do treino"}
          {...register("trainingId", { required: true })}
        ></InputHidden>
        <Input
          type="text"
          placeholder={"Titulo do exercicio"}
          {...register("description", { required: true })}
        ></Input>
        {errors.description?.type === "required" && (
          <RedFont>Titulo do treino está vazia! Preencha por gentileza</RedFont>
        )}
        <>
          <label>Selecione o peso</label>
          <Select {...register("weightId", { required: true })}>
            <option disabled selected value={1}>Selecione um peso</option>
            {pesos?.map((peso) => (
              <option key={peso?.id} value={peso?.id}>
                {peso?.weight} kgs
              </option>
            ))}
          </Select>
        </>
        {errors.weightId?.type === "required" && (
          <RedFont>Titulo está vazio! Preencha por gentileza</RedFont>
        )}
        <DarkButton>Salvar</DarkButton>
      </Form>
      {/* Resposta quanto adicionar */}
      {sucessoAdicionar && (
        <ModalSucesso>
          <h4>{sucessoAdicionar?.msg}</h4>
        </ModalSucesso>
      )}
      {isCarregandoAdicionar && <ModalCarregando />}
      {errorAdicionar && (
        <ModalErro>{errorAdicionar?.response?.data?.msg}</ModalErro>
      )}

      {/* Resposta quanto carregar lista de pesos */}

      {isCarregandoPesos && <ModalCarregando />}
      {errorPesos && <ModalErro>{errorPesos?.response?.data?.msg}</ModalErro>}
    </Container>
  );
};

export default AdicionarExercicio;
