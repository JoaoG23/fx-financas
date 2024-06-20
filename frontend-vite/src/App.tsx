import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

import AutenticadasRouters from "./Routers/AutenticadasRotas";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import calculadora from "./assets/calculadora.svg";

import { InicialRouters } from "./Routers/InicialRouters";

import GlobalStyle from "./themes/global";

import { IconFundo1Flutuante } from "./styles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <ToastContainer></ToastContainer>
        <div>
          <IconFundo1Flutuante src={calculadora} alt="fundo" />
          <GlobalStyle />
          <Router>
            <InicialRouters />
            <AutenticadasRouters />
          </Router>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
