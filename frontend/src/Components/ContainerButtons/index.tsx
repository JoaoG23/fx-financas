import { ContainerButtonsStyle } from "./styles";
type Propriedades = {
  children: any;
};

function ContainerBottons(props: Propriedades) {
  return <ContainerButtonsStyle>{props.children}</ContainerButtonsStyle>;
}

export default ContainerBottons;
