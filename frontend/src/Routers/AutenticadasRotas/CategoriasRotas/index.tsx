import { Route, Routes } from "react-router-dom";
import { Elementos } from "../../../Pages/categorias/Elementos";
import { Subelementos } from "../../../Pages/categorias/Subelementos";
import PrivateRoute from "../../Auth/PrivateRouter";

export const CategoriasRotas = () => {
  return (
    <Routes>
      <Route path="categorias">
        <Route
          path="elementos"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Elementos />
            </PrivateRoute>
          }
        />
        <Route
          path="elementos/subelementos/:id"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Subelementos />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
