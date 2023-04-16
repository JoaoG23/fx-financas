import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../../Auth/PrivateRouter";
import { TodosElementos } from "../../../Pages/categorias/elementos/TodosElementos";
import { AdicionarElemento } from "../../../Pages/categorias/elementos/AdicionarElementos";
import { EditarElemento } from "../../../Pages/categorias/elementos/EditarElementos";
import { DeletarElemento } from "../../../Pages/categorias/elementos/DeletarElementos";
import { VisualizarElemento } from "../../../Pages/categorias/elementos/VisualizarElementos";
import { TodosSubElementos } from "../../../Pages/categorias/subelementos/TodosSubelementos";
import { AdicionarSubelementos } from "../../../Pages/categorias/subelementos/AdicionarSubelementos";
import { EditarSubElemento } from "../../../Pages/categorias/subelementos/EditarSubelementos";
import { DeletarSubelemento } from "../../../Pages/categorias/subelementos/DeletarSubelementos";
import { VisualizarSubelemento } from "../../../Pages/categorias/subelementos/VisualizarSubelementos";

export const CategoriasRotas = () => {
  return (
    <Routes>
      <Route path="categorias">
        <Route path="elementos">
          <Route
            path=""
            element={
              <PrivateRoute redirectTo={"/"}>
                <TodosElementos />
              </PrivateRoute>
            }
          />
          <Route
            path="adicionar"
            element={
              <PrivateRoute redirectTo={"/"}>
                <AdicionarElemento />
              </PrivateRoute>
            }
          />
          <Route
            path="editar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <EditarElemento />
              </PrivateRoute>
            }
          />
          <Route
            path="deletar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <DeletarElemento />
              </PrivateRoute>
            }
          />
          <Route
            path="visualizar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <VisualizarElemento />
              </PrivateRoute>
            }
          />
        </Route>

        {/* -------- Subelemento --------- */}
        <Route
          path="elementos/subelementos"
        >
          <Route
            path=":id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <TodosSubElementos />
              </PrivateRoute>
            }
          />
          <Route
            path="adicionar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <AdicionarSubelementos />
              </PrivateRoute>
            }
          />
          <Route
            path="visualizar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <VisualizarSubelemento />
              </PrivateRoute>
            }
          />
          <Route
            path="editar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <EditarSubElemento />
              </PrivateRoute>
            }
          />
          <Route
            path="deletar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <DeletarSubelemento />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>

    </Routes>
  );
};
