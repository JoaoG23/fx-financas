import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodosItemsFluxoCaixa } from "../../../Pages/fluxocaixas/TodosItemsFluxoxcaixa";
import { AdicionarItem } from "../../../Pages/fluxocaixas/AdicionarItem";
import { EditarItem } from "../../../Pages/fluxocaixas/EditarItem";
import { DeletarItem } from "../../../Pages/fluxocaixas/DeletarItem";
import { VisualizarItem } from "../../../Pages/fluxocaixas/VisualizarItem";
import { TodosItemsMesFluxoCaixa } from "../../../Pages/fluxocaixames/TodosItemMesFluxocaixa";
import { Layout } from "../../../Layout";

export const FluxocaixaRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/fluxocaixa"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <TodosItemsFluxoCaixa />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/mes"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <TodosItemsMesFluxoCaixa />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <AdicionarItem />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <EditarItem />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/visualizar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <VisualizarItem />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/fluxocaixa/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <DeletarItem />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
