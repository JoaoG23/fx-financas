import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import PrivateRoute from "../Auth/PrivateRouter";
import { CategoriasRotas } from "./CategoriasRotas";
import { TodosItemsFluxoCaixa } from "../../Pages/fluxocaixas/TodosItemsFluxoxcaixa";

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
              <TodosItemsFluxoCaixa />
            </PrivateRoute>
          }
        />
      </Routes>
      <CategoriasRotas />
    </>
  );
};

export default AutenticadasRotas;
