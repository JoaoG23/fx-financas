import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodosLocais } from "../../../Pages/locais/TodosLocais";
import { AdicionarLocais } from "../../../Pages/locais/AdicionarLocais";
import { EditarLocais } from "../../../Pages/locais/EditarLocais";

export const LocaisRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/locais"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosLocais />
          </PrivateRoute>
        }
      />
      <Route
        path="/locais/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarLocais />
          </PrivateRoute>
        }
      />
      <Route
        path="/locais/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarLocais />
          </PrivateRoute>
        }
      />

    </Routes>
  );
};
