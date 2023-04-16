import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Auth/PrivateRouter";
import { TodosElementos } from "../../../Pages/categorias/elementos/TodosElementos";
import { AdicionarElemento } from "../../../Pages/categorias/elementos/AdicionarElementos";
import { EditarElemento } from "../../../Pages/categorias/elementos/EditarElementos";
import { DeletarElemento } from "../../../Pages/categorias/elementos/DeletarElementos";
import { VisualizarElemento } from "../../../Pages/categorias/elementos/VisualizarElemento";

export const CategoriasRotas = () => {
  return (
    <Routes>
      <Route path="categorias">
        <Route
          path="elementos"
          element={
            <PrivateRoute redirectTo={"/"}>
              <TodosElementos />
            </PrivateRoute>
          }
        />
        <Route
          path="elementos/adicionar"
          element={
            <PrivateRoute redirectTo={"/"}>
              <AdicionarElemento />
            </PrivateRoute>
          }
        />
        <Route
          path="elementos/editar/:id"
          element={
            <PrivateRoute redirectTo={"/"}>
              <EditarElemento />
            </PrivateRoute>
          }
        />
        <Route
          path="elementos/deletar/:id"
          element={
            <PrivateRoute redirectTo={"/"}>
              <DeletarElemento />
            </PrivateRoute>
          }
        />
        <Route
          path="elementos/visualizar/:id"
          element={
            <PrivateRoute redirectTo={"/"}>
              <VisualizarElemento />
            </PrivateRoute>
          }
        />
        <Route
          path="elementos/subelementos/:id"
          element={
            <PrivateRoute redirectTo={"/"}>
              {/* <Subelementos /> */}
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};
