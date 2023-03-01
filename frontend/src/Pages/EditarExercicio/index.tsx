import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";

import { endpoint } from "../../services/endpoint";
import { navegarAtePagina } from "../../services/navegarAtePagina";
import { useFetch } from "../../services/api";
import { sumirDepoisTempo } from "../../services/sumirDepoisTempo";

import { SucessoResposta } from "../../types/Respostas/SucessoResposta";
import { Pesos } from "../../types/Pesos";

import { Container, Input, Form, Select } from "./styles";
import ModalCarregando from "../../Components/Modais/ModalCarregando";
import ModalErro from "../../Components/Modais/ModalErro";
import DarkButton from "../../Components/Buttons/ButtonDark";
import ModalSucesso from "../../Components/Modais/ModalSucesso";
import RedFont from "../../Components/FontColor/RedFont";
import { ExerciciosUsuario } from "../../types/ExerciciosUsuario";

const EditarExercicio: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { id } = useParams();
  const [sucessoEditar, setSucessoEditar] = useState<SucessoResposta | null>(
    null
  );
  const [isCarregandoEditar, setIsCarregandoEditar] = useState(false);
  const [errorEditar, setErrorEditar] = useState<any | null>(null);

  // Dados antigos
  const {
    dados: dadosAntigos,
    isCarregando: isCarregandoDadosAntigos,
    error: dadosAntigosError,
    setError: setErrorDadosAntigos,
  } = useFetch<ExerciciosUsuario>(`/api/exercice/${id}`, {
    method: "get",
  });

  
  useEffect(() =>{
    reset(dadosAntigos as ExerciciosUsuario);
  },[dadosAntigos])
  

  // Pesos
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
  if (dadosAntigosError) {
    sumirDepoisTempo(setErrorDadosAntigos);
  }


  async function editar(body: object) {
    setIsCarregandoEditar(true);
    try {
      const sucesso = await endpoint.put(`/api/exercice/${id}`, body);
      setSucessoEditar(sucesso.data);
    } catch (error) {
      setErrorEditar(error);
      console.log(error);
    } finally {
      setIsCarregandoEditar(false);
      setTimeout(() => {
        navegarAtePagina(navigate, -1);
      }, 3000);
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(async (body: object) => await editar(body))}>
        <div>
          <h2>Editar {id}° exercicio</h2>
          <p>Preenchar os dados abaixo para editar o seu exercicio</p>
        </div>
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
          <Select
            defaultValue={dadosAntigos?.id}
            {...register("weightId", { required: true })}
          >
            <option defaultValue={dadosAntigos?.id}>
              {dadosAntigos?.weight} kgs
            </option>
            {pesos?.map((peso) => (
              <option key={peso?.id} value={peso?.id}>
                {peso?.weight} kgs
              </option>
            ))}
          </Select>
        </>
        <DarkButton>Salvar</DarkButton>
      </Form>

      {/* ---- Resposta da busca dos dados Antigos */}
      {isCarregandoDadosAntigos && <ModalCarregando />}
      {dadosAntigosError && (
        <ModalErro>{dadosAntigosError?.response?.data?.msg}</ModalErro>
      )}

      {/* Resposta quanto editar */}
      {sucessoEditar && (
        <ModalSucesso>
          <h4>{sucessoEditar?.msg}</h4>
        </ModalSucesso>
      )}
      {isCarregandoEditar && <ModalCarregando />}
      {errorEditar && <ModalErro>{errorEditar?.response?.data?.msg}</ModalErro>}

      {/* Resposta quanto carregar lista de pesos */}

      {isCarregandoPesos && <ModalCarregando />}
      {errorPesos && <ModalErro>{errorPesos?.response?.data?.msg}</ModalErro>}
    </Container>
  );
};

export default EditarExercicio;
