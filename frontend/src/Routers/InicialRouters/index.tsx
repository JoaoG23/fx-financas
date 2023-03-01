import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login";
import Registrarse from "../../Pages/Registrarse";
import EsqueciSenha from "../../Pages/EsqueciSenha";

const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registrar" element={<Registrarse />} />
      <Route path="/esqueci-senha" element={<EsqueciSenha />} />
    </Routes>
  );
};

export default InicialRouters;
