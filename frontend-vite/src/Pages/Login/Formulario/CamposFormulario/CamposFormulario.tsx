import React from "react";
import { useForm } from "react-hook-form";
import { FiLogIn } from "react-icons/fi";

import ButtonDefault from "../../../../Components/Buttons/ButtonDefault/ButtonDark";
import RedFont from "../../../../Components/FontColor/RedFont";
import { InputDefault } from "../../../../Components/Inputs/InputDefault";


import { CamposStyle } from "./styles";

type Props = {
  funcaoSubmit: any;
};
export const CamposFormulario: React.FC<Props> = ({ funcaoSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <CamposStyle onSubmit={handleSubmit(funcaoSubmit)}>
      <InputDefault
        name={"username"}
        register={register}
        placeholder={"Usuário"}
      />
      {errors.username?.type === "required" && (
        <RedFont>Usuário vazio ❌</RedFont>
      )}

      <InputDefault
        name={"senha"}
        type="password"
        register={register}
        placeholder={"Senha"}
      />
      {errors.senha?.type === "required" && <RedFont>Senha vazio ❌</RedFont>}

      <ButtonDefault>
        <p>Logar</p>
        <FiLogIn/>
      </ButtonDefault>
    </CamposStyle>
  );
};
