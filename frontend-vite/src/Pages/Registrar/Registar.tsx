import { Formulario } from "./Formulario/Formulario";
import { ContainerMain, RegistarContainer } from "./styles";

export const Registrar: React.FC = () => {
  return (
    <ContainerMain>
      <RegistarContainer>
        <h4>Registrar</h4>
        <h5>Comece já a usar</h5>
        <h6>Crie o seu primeiro registro!</h6>
        <Formulario />
      </RegistarContainer>
    </ContainerMain>
  );
};
