import { Route, Routes } from "react-router-dom";
import Login from "../../Pages/Login/Login";

const InicialRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
    </Routes>
  );
};

export default InicialRouters;
