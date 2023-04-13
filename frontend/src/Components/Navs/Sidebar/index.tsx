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

import { ColecaoElementos, Container, Item } from "./styles";
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

      <details>
        <ColecaoElementos>
          <BsFillGrid3X2GapFill color="#fff" />
          <p>Categorias</p>
        </ColecaoElementos>
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
    </Container>
  );
};
export default Sidebar;
