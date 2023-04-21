import { BrowserRouter as Router } from "react-router-dom";

import AutenticadasRouters from "./Routers/AutenticadasRotas";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';


import InicialRouters from "./Routers/InicialRouters";

import GlobalStyle from "./themes/global";

import { Body } from "./styles";

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
          {/* <ImagePesos1Flutuante src="./assets/pesoBackgroundBig.svg"></ImagePesos1Flutuante> */}
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
