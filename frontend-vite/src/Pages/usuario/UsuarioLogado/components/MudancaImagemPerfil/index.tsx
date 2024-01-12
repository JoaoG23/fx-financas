import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { IoSave } from "react-icons/io5";

import "react-toastify/dist/ReactToastify.css";

import { mudarImagemPerfilPorUsuariosId } from "./api";

import { buscaDadoUsuarioNaSessao } from "../../../../../utils/buscaDadoUsuarioNaSessao";

import { SpinnerCarregamento } from "../../../../../Components/spinners/SpinnerCarregamento";

import { Container, DragDropImage } from "./styles";
import { SecondaryButton } from "../../../../../Components/Buttons/SecondaryButton/ButtonDark";
import { navegarAtePaginaDepoisTempo } from "../../../../../utils/navegarAtePaginaDepoisTempo/navegarAtePaginaDepoisTempo";

export const MundacaImagemPerfil: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: any) => {
      setUploadedFiles(acceptedFiles);
    },
  });
  const { idUsuario } = buscaDadoUsuarioNaSessao();

  const { mutate, isLoading: isCarregandoUploadImagem } = useMutation(
    () => mudarImagemPerfilPorUsuariosId(idUsuario!, uploadedFiles),
    {
      onSuccess: (data: any) => {
        const imagemNova = data.data;
        sessionStorage.setItem("avatar", imagemNova);
        navegarAtePaginaDepoisTempo(navigate, 0);
        toast.success(`Upload image realizado com sucesso`);
      },
      onError: (error: any) => {
        toast.error(`Ops! Houve um error: ${error.response.data}`);
      },
    }
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <Container>
      {isCarregandoUploadImagem ? (
        <SpinnerCarregamento />
      ) : (
        <SecondaryButton onClick={() => mutate()}>
          <p>Salvar imagem</p>
          <IoSave size={30} />
        </SecondaryButton>
      )}
      <DragDropImage {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Clique ou arraste uma imagem para aqui....</p>
        <ul>
          {uploadedFiles.map((file: any) => (
            <li key={file?.name}>{file?.name}</li>
          ))}
        </ul>
      </DragDropImage>
    </Container>
  );
};
