import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
import { FluxoCaixa } from "../../Pages/FluxoCaixa";
import PrivateRoute from "../Auth/PrivateRouter";

const AutenticadasRotas = () => {
  return (
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
      <Route path="*" element={<h1> Not found the page 404</h1>} />
    </Routes>
  );
};

export default AutenticadasRotas;
