import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../../Pages/Dashboard";
import PrivateRoute from "../Auth/PrivateRouter";
import { CategoriasRotas } from "./CategoriasRotas";
import { FluxocaixaRotas } from "./FluxocaixaRotas";
import { TodosTiposDespesa } from "../../Pages/tiposdespesas/TodosTiposDespesas";
import { Agenda } from "../../Pages/Agenda";

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
      <Routes>
        <Route
          path="/agenda"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Agenda />
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
