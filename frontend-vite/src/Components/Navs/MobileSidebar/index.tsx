import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillFileRuledFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
  BsBoxArrowInLeft,
} from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

import { categorias } from "./data/listLinks";

import * as SideBar from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
import ButtonDefault from "../../Buttons/ButtonDefault/ButtonDark";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";

type Props = {
  setMostrarSidebar: any;
  mostrarSidebar: boolean;
};

export const MobileSidebar: React.FC<Props> = ({
  mostrarSidebar,
  setMostrarSidebar,
}) => {
  const esconderSidebar = () => setMostrarSidebar(false);
  return (
    <>
      {mostrarSidebar && (
        <SideBar.Container>
          <SideBar.Item>
            <BsFillPieChartFill color="#fff" />
            <Link to={"/dashboard"} onClick={esconderSidebar}>
              <p>Dashboard</p>
            </Link>
          </SideBar.Item>
          <SideBar.Item>
            <BsFillFileRuledFill color="#fff" />
            <Link to={"/fluxocaixa"} onClick={esconderSidebar}>
              <p>Fluxo de caixa</p>
            </Link>
          </SideBar.Item>
          <SideBar.Item>
            <BsFillBasket2Fill color="#fff" />
            <Link to={"/tipos_despesas"} onClick={esconderSidebar}>
              <p>Tipos de Despesas</p>
            </Link>
          </SideBar.Item>
          <SideBar.Item>
            <BsFillCalendarWeekFill color="#fff" />
            <Link to={"/agenda"} onClick={esconderSidebar}>
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
                    <Link to={paginas.path} onClick={esconderSidebar}>
                      {paginas.descricao}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </details>
          <SideBar.Item
            onClick={() => {
              limparSessaoUsuario();
              esconderSidebar();
            }}
          >
            <IoLogOut color="#fff" />
            <Link to={"/"}>
              <p>Sair</p>
            </Link>
          </SideBar.Item>
          <SecondaryButton onClick={() => setMostrarSidebar(false)}>
            <BsBoxArrowInLeft size={20}/>
          </SecondaryButton>
        </SideBar.Container>
      )}
    </>
  );
};
