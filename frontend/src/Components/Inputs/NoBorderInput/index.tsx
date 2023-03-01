import React from "react";
import { NoBorders } from "../styles";

type InputData = {
  descricaoPlaceholder?: React.HTMLInputTypeAttribute;
  type: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

const InputNoBorder: React.FC<InputData> = ({
  onChange,
  type,
  descricaoPlaceholder,
}) => {
  return (
    <NoBorders
      onChange={onChange}
      type={type}
      placeholder={descricaoPlaceholder}
    ></NoBorders>
  );
};

export default InputNoBorder;
