import React from "react";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";
import RedFont from "../../../../Components/FontColor/RedFont";
import { InputDefault } from "../../../../Components/Inputs/InputDefault";
import { CamposStyle } from "./styles";
import { CelularInput } from "../../../../Components/Inputs/CelularInput";
import { BsFillPersonCheckFill } from "react-icons/bs";

type Props = {
  funcaoSubmit: any;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  control?: Control<FieldValues>;
};

export const CamposFormulario: React.FC<Props> = ({
  funcaoSubmit,
  register,
  errors,
  control,
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
      {errors.email?.type === "required" && <RedFont>Email vazio ❌</RedFont>}

      <CelularInput
        control={control!}
        name={"telefone"}
        register={register}
        placeholder={"Digite o telefone"}
      />
      {errors.telefone?.type === "required" && (
        <RedFont>Telefone vazio ❌</RedFont>
      )}
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
      <ButtonDefault>
        <p>Registrar</p>
        <BsFillPersonCheckFill />
      </ButtonDefault>
    </CamposStyle>
  );
};
