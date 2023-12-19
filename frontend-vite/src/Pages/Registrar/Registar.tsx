import { Formulario } from "./Formulario/Formulario";
import { ContainerMain, RegistarContainer } from "./styles";

export const Registrar: React.FC = () => {
  return (
    <ContainerMain>
      <RegistarContainer>
        <h2>Registrar</h2>
        <h4>Comece já a usar</h4>
        <h4>Crie o seu primeiro registro!</h4>
        <Formulario />
      </RegistarContainer>
    </ContainerMain>
  );
};
