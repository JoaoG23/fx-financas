import { Formulario } from "./Formulario/Formulario";

import { ContainerMain, LoginContainer } from "./styles";

const Login: React.FC = () => {
  return (
    <ContainerMain>
      <LoginContainer>
        <h3>Login</h3>
        <h5>Acesse o seu cadastro aqui</h5>
        <Formulario />
      </LoginContainer>
    </ContainerMain>
  );
};

export default Login;
