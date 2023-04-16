
import { Link } from "react-router-dom";
import { AcoesItems } from "../../../../../../Components/acoes/AcoesItems";
import { Tipo } from "../../../../../../types/Tipo";

type Props = {
  tipo: Tipo;
};

export const LinhaTipo: React.FC<Props> = ({ tipo }) => {
  return (
    <tr aria-label="linha">
      <td>
        <Link to={`/categorias/elementos/subelementos/tipos/subtipos/${tipo?.id}`}>{tipo?.descricao}</Link>
      </td>
      <td>
        <AcoesItems
          caminhoPrincipal="/categorias/elementos/subelementos/tipos"
          id={tipo?.id}
        />
      </td>
    </tr>
  );
};
