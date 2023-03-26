import React from "react";
import { Link } from "react-router-dom";
import { VscTable } from "react-icons/vsc";
import {
  BsFillCalendarWeekFill,
  BsFillFileRuledFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
} from "react-icons/bs";

import { categorias } from "./data/listLinks";

import { Container, Item } from "./styles";
const Sidebar: React.FC = () => {
  return (
    <Container>
      <Item>
        <BsFillPieChartFill color="#fff" />
        <Link to={"/dashboard"}>
          <p>Dashbord</p>
        </Link>
      </Item>
      <Item>
        <BsFillFileRuledFill color="#fff" />
        <Link to={"/fluxocaixa"}>
          <p>Fluxo de caixa</p>
        </Link>
      </Item>
      <Item>
        <BsFillCalendarWeekFill color="#fff" />
        <Link to={"/agenda"}>
          <p>Agenda</p>
        </Link>
      </Item>
      <Item>
        <BsFillGrid3X2GapFill color="#fff" />
        <Link to={""}>
          <p>Categorias</p>
        </Link>
        <details>
          <summary></summary>
          <ul>
            {categorias.map((paginas) => {
              return (
                <li key={paginas.id}>
                  <Link to={paginas.path}>{paginas.descricao}</Link>
                </li>
              );
            })}
          </ul>
        </details>
      </Item>
    </Container>
  );
};
export default Sidebar;
