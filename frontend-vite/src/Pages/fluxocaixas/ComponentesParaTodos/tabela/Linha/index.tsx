import { GreenColor } from "../../../../../Components/Badges/GreenBadge/styles";
import { RedColor } from "../../../../../Components/Badges/RedBadge/styles";
import RedFont from "../../../../../Components/FontColor/RedFont";
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
      <td>{formataDataPadraoBR(item?.data_insersao?.toString()!)}</td>
      <td>{formataHoraPadraoBR(item?.hora_insersao?.toString()!)}</td>
      <td>{item?.elementos?.descricao}</td>
      <td>{item?.subelementos?.descricao}</td>
      <td>{item?.tipos?.descricao}</td>
      <td>{item?.subtipos?.descricao}</td>
      <td>{item?.descricao}</td>
      <td>{item?.locais?.descricao}</td>
      <td>
        {item?.valor! < 0 ? <RedFont>{item?.valor}</RedFont> : item?.valor}
      </td>
      <td>{item?.saldo}</td>
      <td>
        <AcoesItems id={item?.id} caminhoPrincipal="/fluxocaixa" />
      </td>
    </tr>
  );
};
