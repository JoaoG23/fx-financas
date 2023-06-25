import { Link } from "react-router-dom";

import { SecondaryButton } from "../../Components/Buttons/SecondaryButton/ButtonDark";
import { Formulario } from "./Formulario/Formulario";

import { ContainerMain, LoginContainer } from "./styles";

const Login: React.FC = () => {
  return (
    <ContainerMain>
      <LoginContainer>
        <h3>Login</h3>
        <Formulario />
      </LoginContainer>
    </ContainerMain>
  );
};

export default Login;
