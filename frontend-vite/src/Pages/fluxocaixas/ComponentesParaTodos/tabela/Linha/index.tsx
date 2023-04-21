import { AcoesItems } from "../../../../../Components/acoes/AcoesItems";
import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";
import { formataDataPadraoBR } from "../../../../../utils/formatadoresDatahora/formatarDataPadraoBR";
import { formataHoraPadraoBR } from "../../../../../utils/formatadoresDatahora/formatarHoraPadraoBR";

type Props = {
  item: ItemFluxoCaixa;
};

export const LinhaItemFluxocaixa: React.FC<Props> = ({ item }) => {
  return (
    <tr aria-label="linha">
        <td>{item?.orderador}</td>
        <td>{formataDataPadraoBR(item?.data_insersao?.toString()!)}</td>
        <td>{formataHoraPadraoBR(item?.data_insersao?.toString()!)}</td>
        <td>{item?.elementos?.descricao}</td>
        <td>{item?.subelementos?.descricao}</td>
        <td>{item?.tipos?.descricao}</td>
        <td>{item?.subtipos?.descricao}</td>
        <td>{item?.descricao}</td>
        <td>{item?.valor}</td>
        <td>{item?.saldo}</td>
        <td>
          <AcoesItems id={item?.id} caminhoPrincipal="/fluxocaixa" />
        </td>
    </tr>
  );
};
