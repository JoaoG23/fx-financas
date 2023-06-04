import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import PrivateRoute from "../Auth/PrivateRouter";
import { CategoriasRotas } from "./CategoriasRotas";
import { FluxocaixaRotas } from "./FluxocaixaRotas";
import { TodosTiposDespesa } from "../../Pages/tiposdespesas/TodosTiposDespesas";

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
      </Routes>
      <Routes>
        <Route
          path="/tipos_despesas"
          element={
            <PrivateRoute redirectTo={"/"}>
              <TodosTiposDespesa />
            </PrivateRoute>
          }
        />
      </Routes>
      <FluxocaixaRotas />
      <CategoriasRotas />
    </>
  );
};

export default AutenticadasRotas;
