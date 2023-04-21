import React from "react";
import RedFont from "../../FontColor/RedFont";
import { BsFillEmojiExpressionlessFill } from "react-icons/bs";

type Props = {
  mensagem: string;
};

export const AlertCampoVazio: React.FC<Props> = ({ mensagem }) => {
  return (
    <RedFont>
      {mensagem}
      <BsFillEmojiExpressionlessFill />
    </RedFont>
  );
};
