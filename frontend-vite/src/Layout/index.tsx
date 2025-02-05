import { useState } from "react";
import { BsList } from "react-icons/bs";

import { Body, BotaoPorCima } from "./styles";

import Sidebar from "../Components/Navs/Sidebar";
import ButtonDefault from "../Components/Buttons/ButtonDefault/ButtonDark";
import { MobileSidebar } from "../Components/Navs/MobileSidebar";
import Header from "../Components/Navs/Header";

type Props = {
  children?: React.ReactNode | React.ReactNode[];
};

export const Layout: React.FC<Props> = ({ children }) => {
  const [mostrarSidebar, setMostrarSidebar] = useState<boolean>(false);

  return (
    <main>
      <Sidebar />
      <BotaoPorCima>
        <ButtonDefault onClick={() => setMostrarSidebar(true)}>
          <BsList size={27} />
        </ButtonDefault>
      </BotaoPorCima>
      <MobileSidebar
        setMostrarSidebar={setMostrarSidebar}
        mostrarSidebar={mostrarSidebar}
      />
      <Header />
      <Body>{children}</Body>
    </main>
  );
};
