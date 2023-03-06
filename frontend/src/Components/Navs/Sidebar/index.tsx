import React from "react";
import { Link } from "react-router-dom";
import { VscTable } from "react-icons/vsc";

import { linkes } from "./data/listLinks";
import { limparSessaoUsuario } from "../../../services/limparSessaoUsuario";

import { Container, Item, Image } from "./styles";
const Sidebar: React.FC = () => {
  return (
    <Container>
      {linkes.map((item) => (
        <Item key={item.id}>
          <VscTable color="#fff" />
          <Link to={item.path}>
            {/* <Image src={item.icon} alt="gym"></Image>ca */}
            <p>{item.descricao}</p>
          </Link>
        </Item>
      ))}

    </Container>
  );
};
export default Sidebar;
