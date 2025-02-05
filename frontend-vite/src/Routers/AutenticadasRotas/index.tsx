import { Route, Routes } from "react-router-dom";

import PrivateRoute from "../Auth/PrivateRouter";

import { Dashboard } from "../../Pages/Dashboard";
import { TodosTiposDespesa } from "../../Pages/tiposdespesas/TodosTiposDespesas";
import { Agenda } from "../../Pages/Agenda";
import { VisualizarUsuarioLogado } from "../../Pages/usuario/UsuarioLogado";

import { CategoriasRotas } from "./CategoriasRotas";
import { FluxocaixaRotas } from "./FluxocaixaRotas";
import { LocaisRotas } from "./LocaisRotas";
import { ProgramacaoRotas } from "./ProgramacaoRotas";
import { DeletarUsuario } from "../../Pages/usuario/DeletarUsuario";
import { Layout } from "../../Layout";

const AutenticadasRotas = () => {
  return (
    <>
      <Routes>
        <Route
          path="/usuario_logado"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <VisualizarUsuarioLogado />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/usuario_logado/deletar/:id"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <DeletarUsuario />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <Dashboard />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/tipos_despesas"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <TodosTiposDespesa />
              </Layout>
            </PrivateRoute>
          }
        />
        <Route
          path="/agenda"
          element={
            <PrivateRoute redirectTo={"/"}>
              <Layout>
                <Agenda />
              </Layout>
            </PrivateRoute>
          }
        />
      </Routes>
      <FluxocaixaRotas />
      <CategoriasRotas />
      <LocaisRotas />
      <ProgramacaoRotas />
    </>
  );
};

export default AutenticadasRotas;
