import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillFileRuledFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
  BsBoxArrowInLeft,
  BsBank2,
  BsBoxFill,
} from "react-icons/bs";

import { IoLogOut } from "react-icons/io5";

import { categorias } from "./data/listLinks";

import * as SideBar from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
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
          <SideBar.Item onClick={esconderSidebar}>
            <BsFillPieChartFill color="#fff" />
            <Link to={"/dashboard"}>
              <p>Dashboard</p>
            </Link>
          </SideBar.Item>

          <SideBar.Item onClick={esconderSidebar}>
            <BsBank2 color="#fff" />
            <Link to={"/locais"}>
              <p>Locais</p>
            </Link>
          </SideBar.Item>

          <SideBar.Item onClick={esconderSidebar}>
            <BsFillFileRuledFill color="#fff" />
            <Link to={"/fluxocaixa"}>
              <p>Fluxo de caixa</p>
            </Link>
          </SideBar.Item>

          <SideBar.Item onClick={esconderSidebar}>
            <BsFillBasket2Fill color="#fff" />
            <Link to={"/tipos_despesas"}>
              <p>Tipos de Despesas</p>
            </Link>
          </SideBar.Item>

          <SideBar.Item onClick={esconderSidebar}>
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
            <SideBar.Elementos>
              {categorias.map((paginas) => {
                return (
                  <li key={paginas.id}>
                    <Link to={paginas.path} onClick={esconderSidebar}>
                      {paginas.descricao}
                    </Link>
                  </li>
                );
              })}
            </SideBar.Elementos>
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
            <BsBoxArrowInLeft size={20} />
          </SecondaryButton>
        </SideBar.Container>
      )}
    </>
  );
};
