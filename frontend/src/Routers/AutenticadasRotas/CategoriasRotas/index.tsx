import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Auth/PrivateRouter";

export const CategoriasRotas = () => {
  return (
    <Routes>
      <Route
        path="/categorias/elementos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <div></div>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1> Not found the page 404</h1>} />
    </Routes>
  );
};

