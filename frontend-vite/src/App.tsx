import { BrowserRouter as Router } from "react-router-dom";

import AutenticadasRouters from "./Routers/AutenticadasRotas";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import logo from './assets/triangulo.svg'

import InicialRouters from "./Routers/InicialRouters";

import GlobalStyle from "./themes/global";

import { Body, IconFundo1Flutuante } from "./styles";

import Sidebar from "./Components/Navs/Sidebar";
import Header from "./Components/Navs/Header";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <ToastContainer></ToastContainer>
        <>
          <IconFundo1Flutuante src={logo} alt="logo"/>
          {/* <ImagePesos2Flutuante src="./assets/pesoBackgroundSmall.svg"></ImagePesos2Flutuante> */}
          <GlobalStyle />
          <Router>
            <Sidebar />
            <Header />
            <Body>
              <AutenticadasRouters />
            </Body>
            <InicialRouters />
          </Router>
        </>
      </>
    </QueryClientProvider>
  );
}

export default App;
