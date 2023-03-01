import { BrowserRouter as Router } from "react-router-dom";

import AdminRouters from "./Routers/AdminRouters";
import InicialRouters from "./Routers/InicialRouters";

import GlobalStyle from "./themes/global";

import { Body, ImagePesos1Flutuante, ImagePesos2Flutuante } from "./styles";

import Sidebar from "./Components/Navs/Sidebar";
import Header from "./Components/Navs/Header";

function App() {
  return (
    // <Provider >
    <>
      <>
        <ImagePesos1Flutuante src="./assets/pesoBackgroundBig.svg"></ImagePesos1Flutuante>
        <ImagePesos2Flutuante src="./assets/pesoBackgroundSmall.svg"></ImagePesos2Flutuante>
        <GlobalStyle />
        <Router>
          <Sidebar />
          <Header />
          <Body>
            <AdminRouters />
          </Body>
          <InicialRouters />
        </Router>
      </>
    </>
  );
}

export default App;
