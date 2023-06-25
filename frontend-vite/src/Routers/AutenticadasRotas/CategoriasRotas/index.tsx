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
import { TodosTipos } from "../../../Pages/categorias/tipos/TodosTipos";
import { AdicionarTipos } from "../../../Pages/categorias/tipos/AdicionarTipos";
import { EditarTipo } from "../../../Pages/categorias/tipos/EditarTipos";
import { DeletarTipo } from "../../../Pages/categorias/tipos/DeletarTipos";
import { VisualizarTipos } from "../../../Pages/categorias/tipos/VisualizarTipos";
import { TodosSubtipos } from "../../../Pages/categorias/subtipos/TodosSubtipos";
import { AdicionarSubtipos } from "../../../Pages/categorias/subtipos/AdicionarSubtipos";
import { EditarSubtipo } from "../../../Pages/categorias/subtipos/EditarSubtipos";
import { DeletarSubtipo } from "../../../Pages/categorias/subtipos/DeletarSubtipos";
import { VisualizarSubtipos } from "../../../Pages/categorias/subtipos/VisualizarSubtipos";

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
        <Route path="elementos/subelementos">
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

        {/* ------------ Tipos ------------ */}
        <Route path="elementos/subelementos/tipos">
          <Route
            path=":id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <TodosTipos />
              </PrivateRoute>
            }
          />
          <Route
            path="adicionar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <AdicionarTipos />
              </PrivateRoute>
            }
          />
          <Route
            path="visualizar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <VisualizarTipos />
              </PrivateRoute>
            }
          />
          <Route
            path="editar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <EditarTipo />
              </PrivateRoute>
            }
          />
          <Route
            path="deletar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <DeletarTipo />
              </PrivateRoute>
            }
          />
        </Route>

        {/* ----------- Subtipos --------------- */}
        <Route path="elementos/subelementos/tipos/subtipos">
          <Route
            path=":id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <TodosSubtipos />
              </PrivateRoute>
            }
          />
          <Route
            path="adicionar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <AdicionarSubtipos />
              </PrivateRoute>
            }
          />
          <Route
            path="visualizar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <VisualizarSubtipos />
              </PrivateRoute>
            }
          />
          <Route
            path="editar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <EditarSubtipo />
              </PrivateRoute>
            }
          />
          <Route
            path="deletar/:id"
            element={
              <PrivateRoute redirectTo={"/"}>
                <DeletarSubtipo />
              </PrivateRoute>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
};
