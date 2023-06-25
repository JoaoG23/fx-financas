import { AcoesItems } from "../../../../../Components/acoes/AcoesItems";
import { Local } from "../../../../../types/Local";

type Props = {
  local: Local;
};

export const LinhaLocal: React.FC<Props> = ({ local }) => {
  return (
    <tr aria-label="linha">
      <td>{local?.descricao}</td>
      <td>
        <AcoesItems caminhoPrincipal="/locais" id={local?.id} />
      </td>
    </tr>
  );
};
