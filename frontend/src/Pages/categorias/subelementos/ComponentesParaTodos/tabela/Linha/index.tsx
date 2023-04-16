
import { Link } from "react-router-dom";
import { AcoesItems } from "../../../../../../Components/acoes/AcoesItems";
import { Subelemento } from "../../../../../../types/Subelemento";

type Props = {
  subelemento: Subelemento;
};

export const LinhaSubelementos: React.FC<Props> = ({ subelemento }) => {
  return (
    <tr aria-label="linha">
      <td>
        <Link to={`/tipos/${subelemento?.id}`}>{subelemento?.descricao}</Link>
      </td>
      <td>
        <AcoesItems
          caminhoPrincipal="/categorias/subelementos"
          id={subelemento?.id}
        />
      </td>
    </tr>
  );
};
