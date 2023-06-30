import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodosItemsFluxoCaixa } from "../../../Pages/fluxocaixas/TodosItemsFluxoxcaixa";
import { AdicionarItem } from "../../../Pages/fluxocaixas/AdicionarItem";
import { EditarItem } from "../../../Pages/fluxocaixas/EditarItem";
import { DeletarItem } from "../../../Pages/fluxocaixas/DeletarItem";
import { VisualizarItem } from "../../../Pages/fluxocaixas/VisualizarItem";
import { AdicaoItensEmMassa } from "../../../Pages/fluxocaixas/AdicionarItensMassa";
import { TodosItemsMesFluxoCaixa } from "../../../Pages/fluxocaixames/TodosItemMesFluxocaixa";

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
        path="/fluxocaixa/mes"
        element={
          <PrivateRoute redirectTo={"/"}>
            <TodosItemsMesFluxoCaixa />
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarItem />
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/adicionar/massa"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicaoItensEmMassa />
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarItem />
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/visualizar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <VisualizarItem />
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarItem />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
