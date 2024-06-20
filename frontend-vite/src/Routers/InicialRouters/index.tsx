import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";
import { Registrar } from "../../Pages/Registrar/Registar";

export const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/registrar" element={<Registrar/>}></Route>
    </Routes>
  );
};

