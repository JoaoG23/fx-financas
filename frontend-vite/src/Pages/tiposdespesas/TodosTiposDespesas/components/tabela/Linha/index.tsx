
import { Link } from "react-router-dom";
import { AcoesItems } from "../../../../../../Components/acoes/AcoesItems";
import { TipoDespesa } from "../../../../../../types/TipoDespesa";

type Props = {
  tipoDespesa: TipoDespesa;
};

export const LinhaTipoDespesas: React.FC<Props> = ({ tipoDespesa }) => {

  return (
    <tr aria-label="linha">
      <td>
        <Link to={`tipos_despesas/${tipoDespesa?.id}`}>{tipoDespesa?.descricao}</Link>
      </td>
      <td>
      </td>
    </tr>
  );
};
