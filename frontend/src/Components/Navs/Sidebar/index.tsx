import React from "react";
import { Link } from "react-router-dom";

import { linkes } from "./data/listLinks";
import { limparSessaoUsuario } from "../../../services/limparSessaoUsuario";

import { Container, Item,Image } from "./styles";
const Sidebar: React.FC = () => {
  return (
    <Container>
      {linkes.map((item) => (
        <Item key={item.id}>
          <Link to={item.path}>
            <Image src={item.icon} alt="gym"></Image>
            <p>{item.descricao}</p>
          </Link>
        </Item>
      ))}
        <Item onClick={limparSessaoUsuario}>
          <Link to={'..'}>
            <Image src={'./assets/icons/sidebar-icons/logout.svg'} alt="gym"></Image>
            <p>logout</p>
          </Link>
        </Item>
    </Container>
  );
};
export default Sidebar;
