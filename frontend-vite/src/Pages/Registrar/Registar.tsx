import { Formulario } from "./Formulario/Formulario";
import { ContainerMain, RegistarContainer } from "./styles";

export const Registrar: React.FC = () => {
  return (
    <ContainerMain>
      <img src="./assets/login-fundo.png" alt="login-fudo"></img>
      <RegistarContainer>
        <h4>Registrar</h4>
        <h5>Comece já a usar</h5>
        <h6>Crie o seu primeiro registro!</h6>
        <Formulario />
      </RegistarContainer>
    </ContainerMain>
  );
};
