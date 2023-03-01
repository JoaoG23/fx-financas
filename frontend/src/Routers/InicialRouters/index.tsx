import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login";
import Registrarse from "../../Pages/Registrarse";

const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registrar" element={<Registrarse />} />
    </Routes>
  );
};

export default InicialRouters;
