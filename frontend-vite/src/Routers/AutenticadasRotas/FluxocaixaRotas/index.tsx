import { Route, Routes } from "react-router-dom";
import React from "react";
import { TodosItemsFluxoCaixa } from "../../../Pages/fluxocaixas/TodosItemsFluxoxcaixa";
import PrivateRoute from "../../Auth/PrivateRouter";
import { AdicionarItem } from "../../../Pages/fluxocaixas/AdicionarItem";
import { EditarItem } from "../../../Pages/fluxocaixas/EditarItem";


export const FluxocaixaRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/fluxocaixa"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosItemsFluxoCaixa />
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarItem/>
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarItem/>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
