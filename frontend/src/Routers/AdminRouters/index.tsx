import { Route, Routes } from "react-router-dom";
import AdicionarExercicio from "../../Pages/AdicionarExercicio";
import AdicionarTreino from "../../Pages/AdicionarTreino";
import Dashboard from "../../Pages/Dashboard";
import DeletarExercicio from "../../Pages/DeletarExercicio";
import DeletarTreino from "../../Pages/DeletarTreino";
import DeletarUsuario from "../../Pages/DeletarUsuario";
import EditarExercicio from "../../Pages/EditarExercicio";
import EditarTreino from "../../Pages/EditarTreino";
import EditarUsuario from "../../Pages/EditarUsuario";
import Exercicio from "../../Pages/Exercicio";
import ExerciciosDoTreino from "../../Pages/ExerciciosDoTreino";
import PesosUtilizados from "../../Pages/Pesos";
import Treinos from "../../Pages/Treinos";
import PrivateRoute from "../Auth/PrivateRouter";

const AdminRouters = () => {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Treinos />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino/adicionar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/treino/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicios-treino/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <ExerciciosDoTreino />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/adicionar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <AdicionarExercicio />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <Exercicio />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/editar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarExercicio />
          </PrivateRoute>
        }
      />
      <Route
        path="/exercicio/deletar/:id"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarExercicio />
          </PrivateRoute>
        }
      />
      <Route
        path="/usuario-logado"
        element={
          <PrivateRoute redirectTo={"/"}>
            <EditarUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/usuario-logado/deletar"
        element={
          <PrivateRoute redirectTo={"/"}>
            <DeletarUsuario />
          </PrivateRoute>
        }
      />
      <Route
        path="/pesos"
        element={
          <PrivateRoute redirectTo={"/"}>
            <PesosUtilizados/>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1> Not found the page 404</h1>} />
    </Routes>
  );
};

export default AdminRouters;
