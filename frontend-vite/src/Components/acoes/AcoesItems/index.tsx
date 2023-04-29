import { LinkDeletar } from "../../links/LinkDeletar";
import { LinkEditar } from "../../links/LinkEditar";
import { LinkVisualizar } from "../../links/LinkVisualizar";

import * as Acoes from "./styles";
type Props = {
  caminhoPrincipal?: string;
  id?: any;
  entradaOuSaida?: string;
};
export const AcoesItems: React.FC<Props> = ({ id, caminhoPrincipal }) => {
  const origem = caminhoPrincipal;
  return (
    <Acoes.Container
    role="menu"
      className="d-flex justify-content-end gap-2 align-items-center"
    >
      <LinkVisualizar caminho={`${origem}/visualizar/${id}`} />
      <LinkEditar caminho={`${origem}/editar/${id}`} />
      <LinkDeletar caminho={`${origem}/deletar/${id}`} />
    </Acoes.Container>
  );
};
