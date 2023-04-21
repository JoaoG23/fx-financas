
import { Link } from "react-router-dom";
import { AcoesItems } from "../../../../../../../Components/acoes/AcoesItems";
import { Elemento } from "../../../../../../../types/Elemento";

type Props = {
  elemento: Elemento;
};

export const LinhaElementos: React.FC<Props> = ({ elemento }) => {

  return (
    <tr aria-label="linha">
      <td>
        <Link to={`subelementos/${elemento?.id}?titulo=${elemento?.descricao}`}>{elemento?.descricao}</Link>
      </td>
      <td>
        <AcoesItems
          caminhoPrincipal="/categorias/elementos"
          id={elemento?.id}
        />
      </td>
    </tr>
  );
};
