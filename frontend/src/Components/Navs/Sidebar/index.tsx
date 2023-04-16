import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillFileRuledFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
} from "react-icons/bs";

import { categorias } from "./data/listLinks";

import * as SideBar from "./styles";

const Sidebar: React.FC = () => {
  return (
    <SideBar.Container>
      <SideBar.Item>
        <BsFillPieChartFill color="#fff" />
        <Link to={"/dashboard"}>
          <p>Dashbord</p>
        </Link>
      </SideBar.Item>
      <SideBar.Item>
        <BsFillFileRuledFill color="#fff" />
        <Link to={"/fluxocaixa"}>
          <p>Fluxo de caixa</p>
        </Link>
      </SideBar.Item>
      <SideBar.Item>
        <BsFillCalendarWeekFill color="#fff" />
        <Link to={"/agenda"}>
          <p>Agenda</p>
        </Link>
      </SideBar.Item>

      <details>
        <SideBar.ColecaoElementos>
          <BsFillGrid3X2GapFill color="#fff" />
          <p>Categorias</p>
        </SideBar.ColecaoElementos>
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
    </SideBar.Container>
  );
};
export default Sidebar;
