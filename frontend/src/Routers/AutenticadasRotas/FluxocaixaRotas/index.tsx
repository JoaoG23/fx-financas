import { Route, Routes } from "react-router-dom";
import React from "react";
import { TodosItemsFluxoCaixa } from "../../../Pages/fluxocaixas/TodosItemsFluxoxcaixa";
import PrivateRoute from "../../Auth/PrivateRouter";
import { AdicionarItem } from "../../../Pages/fluxocaixas/AdicionarItem";


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
    </Routes>
  );
};
