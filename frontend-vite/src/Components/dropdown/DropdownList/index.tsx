import React, { useState } from "react";
import { BsArrowBarLeft } from "react-icons/bs";

import * as Dropdown from "./styles";
type Props = {
  children?: JSX.Element[] | JSX.Element;
  descricao?: JSX.Element[] | JSX.Element;
};

export const DropdownList: React.FC<Props> = ({ children, descricao }) => {
  const [mostrar, setMostrar] = useState<boolean>(false);

  const aoClicar = () => {
    return setMostrar(!mostrar);
  };
  return (
    <Dropdown.Container role="button" onClick={aoClicar}>
      <Dropdown.IconAbrir>
        <BsArrowBarLeft color="#fff" />
      </Dropdown.IconAbrir>
      {descricao}
      <Dropdown.BoxDropdown abrir={mostrar}>{children}</Dropdown.BoxDropdown>
    </Dropdown.Container>
  );
};
