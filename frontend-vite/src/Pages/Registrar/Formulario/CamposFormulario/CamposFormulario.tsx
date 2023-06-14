import React from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormRegister,
  useForm,
} from "react-hook-form";

import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";
import RedFont from "../../../../Components/FontColor/RedFont";
import { InputDefault } from "../../../../Components/Inputs/InputDefault";
import { CamposStyle } from "./styles";

type Props = {
  funcaoSubmit: any;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export const CamposFormulario: React.FC<Props> = ({
  funcaoSubmit,
  register,
  errors,
}) => {
  return (
    <CamposStyle onSubmit={funcaoSubmit}>

      <InputDefault
        name={"nome"}
        type="nome"
        register={register}
        placeholder={"Digite o nome"}
      />
      {errors.nome?.type === "required" && <RedFont>Nome vazio ❌</RedFont>}
      <InputDefault
        name={"email"}
        register={register}
        placeholder={"Digite o email"}
      />
      {errors.email?.type === "required" && (
        <RedFont>Email vazio ❌</RedFont>
      )}

      <InputDefault
        name={"telefone"}
        type="tel"
        register={register}
        placeholder={"Digite o telefone"}
      />
      {errors.telefone?.type === "required" && <RedFont>Telefone vazio ❌</RedFont>}
      <InputDefault
        name={"username"}
        register={register}
        placeholder={"Digite um nome usuário"}
      />
      {errors.username?.type === "required" && (
        <RedFont>Usuário vazio ❌</RedFont>
      )}

      <InputDefault
        name={"senha"}
        type="password"
        register={register}
        placeholder={"Digite uma senha"}
      />
      {errors.senha?.type === "required" && <RedFont>Senha vazio ❌</RedFont>}
      <ButtonDefault>Registrar</ButtonDefault>
    </CamposStyle>
  );
};
