import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillFileRuledFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
  BsBank2,
  BsFillCalendarMonthFill,
} from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

import { tiposFluxosCaixa, categorias } from "./data/listLinks";

import * as SideBar from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";

import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";

const Sidebar: React.FC = () => {
  const { nomeUsuario } = buscaDadoUsuarioNaSessao();

  return (
    <SideBar.Container>
      <SideBar.Item>
        <FaUserAlt color="#fff" size={20} />
        <Link to={"/usuario_logado"}>
          <p>Olá {nomeUsuario}!</p>
        </Link>
      </SideBar.Item>

      <SideBar.Item>
        <BsFillPieChartFill color="#fff" />
        <Link to={"/dashboard"}>
          <p>Dashboard</p>
        </Link>
      </SideBar.Item>

      <SideBar.Item>
        <BsBank2 color="#fff" />
        <Link to={"/locais"}>
          <p>Locais</p>
        </Link>
      </SideBar.Item>

      <details>
        <SideBar.ColecaoElementos>
          <BsFillGrid3X2GapFill color="#fff" />
          <p>Fluxo de caixa</p>
        </SideBar.ColecaoElementos>
        <SideBar.Elementos>
          {tiposFluxosCaixa.map((paginas) => {
            return (
              <li key={paginas.id}>
                <Link to={paginas.path}>{paginas.descricao}</Link>
              </li>
            );
          })}
        </SideBar.Elementos>
      </details>

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
          <IoIosArrowDown />
        </SideBar.ColecaoElementos>
        <SideBar.Elementos>
          {categorias.map((paginas) => {
            return (
              <li key={paginas.id}>
                <Link to={paginas.path}>{paginas.descricao}</Link>
              </li>
            );
          })}
        </SideBar.Elementos>
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
