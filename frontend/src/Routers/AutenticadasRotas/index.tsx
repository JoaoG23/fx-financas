import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import { FluxoCaixa } from "../../Pages/FluxoCaixa";
import PrivateRoute from "../Auth/PrivateRouter";
import { CategoriasRotas } from "./CategoriasRotas";

const AutenticadasRotas = () => {
  return (
    <>
      <Routes>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/fluxocaixa"
          element={
            <PrivateRoute redirectTo={"/"}>
              <FluxoCaixa />
            </PrivateRoute>
          }
        />
      </Routes>
      <CategoriasRotas />
    </>
  );
};

export default AutenticadasRotas;
