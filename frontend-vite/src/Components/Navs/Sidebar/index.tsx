import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillFileRuledFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
} from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

import { categorias } from "./data/listLinks";

import * as SideBar from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";

const Sidebar: React.FC = () => {
  return (
    <SideBar.Container>
      <SideBar.Item>
        <BsFillPieChartFill color="#fff" />
        <Link to={"/dashboard"}>
          <p>Dashboard</p>
        </Link>
      </SideBar.Item>
      <SideBar.Item>
        <BsFillFileRuledFill color="#fff" />
        <Link to={"/fluxocaixa"}>
          <p>Fluxo de caixa</p>
        </Link>
      </SideBar.Item>
      <SideBar.Item>
        <BsFillBasket2Fill color="#fff" />
        <Link to={"/tipos_despesas"}>
          <p>Tipos de Despesas</p>
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
      <SideBar.Item onClick={limparSessaoUsuario}>
        <IoLogOut color="#fff" />
        <Link to={"/"}>
          <p>Sair</p>
        </Link>
      </SideBar.Item>
    </SideBar.Container>
  );
};
export default Sidebar;
