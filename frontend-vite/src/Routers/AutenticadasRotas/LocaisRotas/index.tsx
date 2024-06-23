import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodosLocais } from "../../../Pages/locais/TodosLocais";
import { AdicionarLocais } from "../../../Pages/locais/AdicionarLocais";
import { EditarLocais } from "../../../Pages/locais/EditarLocais";
import { Layout } from "../../../Layout";

export const LocaisRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/locais"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <TodosLocais />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/locais/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <AdicionarLocais />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/locais/visualizar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <h3>Não implementado</h3>
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/locais/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <EditarLocais />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
