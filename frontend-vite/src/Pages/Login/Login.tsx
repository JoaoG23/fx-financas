import { Link } from "react-router-dom";


import { SecondaryButton } from "../../Components/Buttons/SecondaryButton/ButtonDark";
import { Formulario } from "./Formulario/Formulario";
import { ContainerMain, LoginContainer,ImageLateral } from "./styles";

import imageLogin from "../../assets/login-image.jpg";

const Login: React.FC = () => {
  return (
    <ContainerMain>
      <div></div>
      {/* <ImageLateral src={imageLogin} alt="login-fudo"></ImageLateral> */}
      <LoginContainer>
        <h4>Login</h4>
        <Formulario />
        <Link to={"/registrar"}>
          <SecondaryButton>
            <h5>Registra-se</h5>
          </SecondaryButton>
        </Link>
      </LoginContainer>
    </ContainerMain>
  );
};

export default Login;
