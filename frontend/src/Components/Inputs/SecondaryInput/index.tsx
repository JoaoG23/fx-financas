import React from "react";
import { SecondaryInputStyle } from "../styles";

// interface Iinput {
//   onChange?:any;
//   value?:any;
//   descricaoPlaceholder?: string;
//   type: string;
// }
// const InputSecondary = (props: Iinput) => {
//   return (
//     <SecondaryInputStyle value={props.value}
//       placeholder={props.descricaoPlaceholder}
//       type={props.type}
//     ></SecondaryInputStyle>
//   );
// };

type InputData = {
  descricaoPlaceholder?: React.HTMLInputTypeAttribute;
  value?: string | number;
  type: React.HTMLInputTypeAttribute;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
};

const InputSecondary: React.FC<InputData> = ({
  value,
  onChange,
  type,
  descricaoPlaceholder,
}) => {
  return (
    <SecondaryInputStyle
    value={value}
      onChange={onChange}
      type={type}
      placeholder={descricaoPlaceholder}
    ></SecondaryInputStyle>
  );
};

export default InputSecondary;
