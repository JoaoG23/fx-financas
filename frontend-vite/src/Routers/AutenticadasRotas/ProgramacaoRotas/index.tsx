import { Route, Routes } from "react-router-dom";
import React from "react";

import PrivateRoute from "../../Auth/PrivateRouter";

import { TodosProgramacoes } from "../../../Pages/programacao/TodasProgramacoes";
import { AdicionarProgramacao } from "../../../Pages/programacao/AdicionarProgramacao";
import { DeletarProgramacao } from "../../../Pages/programacao/DeletarProgramacao";
import { InserirProgramacaoFluxocaixa } from "../../../Pages/programacao/InserirProgramacaoFluxocaixa";
import { EditarProgramacao } from "../../../Pages/programacao/EditarProgramacao";
import { Layout } from "../../../Layout";

export const ProgramacaoRotas: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/programacao"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <TodosProgramacoes />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/programacao/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <AdicionarProgramacao />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/programacao/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <EditarProgramacao />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/programacao/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <DeletarProgramacao />
            </Layout>
          </PrivateRoute>
        }
      />
      <Route
        path="/programacao/capturar_inserir"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Layout>
              <InserirProgramacaoFluxocaixa />
            </Layout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
