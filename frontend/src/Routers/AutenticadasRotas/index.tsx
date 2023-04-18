import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import PrivateRoute from "../Auth/PrivateRouter";
import { CategoriasRotas } from "./CategoriasRotas";
import { FluxocaixaRotas } from "./FluxocaixaRotas";

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
      <FluxocaixaRotas />
      <CategoriasRotas />
    </>
  );
};

export default AutenticadasRotas;
