import { Formulario } from "./Formulario/Formulario";
import { ContainerMain, LoginContainer } from "./styles";

const Login: React.FC = () => {
  return (
    <ContainerMain>
      <img src="./assets/login-fundo.png" alt="login-fudo"></img>
      <LoginContainer>
        <h4>Login</h4>
        <Formulario />
      </LoginContainer>
    </ContainerMain>
  );
};

export default Login;
