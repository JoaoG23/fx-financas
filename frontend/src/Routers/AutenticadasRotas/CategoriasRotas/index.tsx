import { Route, Routes } from "react-router-dom";
import { Elementos } from "../../../Pages/categorias/Elementos";
import PrivateRoute from "../../Auth/PrivateRouter";

export const CategoriasRotas = () => {
  return (
    <Routes>
      <Route
        path="categorias/elementos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Elementos/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

