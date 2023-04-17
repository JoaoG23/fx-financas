
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
        <Link to={`/categorias/elementos/subelementos/tipos/${subelemento?.id}?titulo=${subelemento?.descricao}`}>{subelemento?.descricao}</Link>
      </td>
      <td>
        <AcoesItems
          caminhoPrincipal="/categorias/elementos/subelementos"
          id={subelemento?.id}
        />
      </td>
    </tr>
  );
};
