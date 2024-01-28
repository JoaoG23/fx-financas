import React from "react";
import { Link } from "react-router-dom";
import {
  BsFillCalendarWeekFill,
  BsFillGrid3X2GapFill,
  BsFillPieChartFill,
  BsFillBasket2Fill,
  BsBank2,
  BsX,
} from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";

import { tiposFluxosCaixa, categorias } from "../Sidebar/data/listLinks";

import * as SideBar from "./styles";

import { limparSessaoUsuario } from "../../../utils/limparSessaoUsuario";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";
import { buscaDadoUsuarioNaSessao } from "../../../utils/buscaDadoUsuarioNaSessao";
import { ImagemPerfil } from "../Sidebar/ImagePerfil";

type Props = {
  setMostrarSidebar: any;
  mostrarSidebar: boolean;
};

export const MobileSidebar: React.FC<Props> = ({
  mostrarSidebar,
  setMostrarSidebar,
}) => {
  const { nomeUsuario, imagePerfil } = buscaDadoUsuarioNaSessao();
  const esconderSidebar = () => setMostrarSidebar(false);
  return (
    <>
      {mostrarSidebar && (
        <SideBar.Container>
          <SideBar.Exit role="button" onClick={() => setMostrarSidebar(false)}>
            <BsX size={60} />
          </SideBar.Exit>
          <SideBar.Item>
            <ImagemPerfil caminho_imagem={imagePerfil!} />
            <Link to={"/usuario_logado"}>
              <p>Olá {nomeUsuario}!</p>
            </Link>
          </SideBar.Item>

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

          <details>
            <SideBar.ColecaoElementos>
              <BsFillGrid3X2GapFill color="#fff" />
              <p>Fluxo de caixa</p>
            </SideBar.ColecaoElementos>
            <SideBar.Elementos>
              {tiposFluxosCaixa.map((paginas) => {
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
        </SideBar.Container>
      )}
    </>
  );
};
