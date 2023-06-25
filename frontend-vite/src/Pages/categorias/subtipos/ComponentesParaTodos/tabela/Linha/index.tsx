import { Link } from "react-router-dom";
import { AcoesItems } from "../../../../../../Components/acoes/AcoesItems";
import { Subtipo } from "../../../../../../types/Subtipo";

type Props = {
  subtipo: Subtipo;
};

export const LinhaSubtipo: React.FC<Props> = ({ subtipo }) => {
  const caminhoPrincipal = "/categorias/elementos/subelementos/tipos/subtipos";
  return (
    <tr aria-label="linha">
      <td>{subtipo?.descricao}</td>
      <td>
        <AcoesItems caminhoPrincipal={caminhoPrincipal} id={subtipo?.id} />
      </td>
    </tr>
  );
};
