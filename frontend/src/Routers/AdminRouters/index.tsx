import { Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard";
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
      <Route path="*" element={<h1> Not found the page 404</h1>} />
    </Routes>
  );
};

export default AdminRouters;
