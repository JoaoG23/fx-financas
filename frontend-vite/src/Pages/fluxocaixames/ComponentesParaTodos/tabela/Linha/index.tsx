import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import RedFont from "../../../../../Components/FontColor/RedFont";

import { AcoesItems } from "../../../../../Components/acoes/AcoesItems";
import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";
import { formatarDataHoraPadraoBR } from "../../../../../utils/formatadoresDatahora/formatarDataHoraPadraoBR/formatarDataHoraBR";

type Props = {
  item: ItemFluxoCaixa;
};

export const LinhaItemFluxocaixa: React.FC<Props> = ({ item }) => {
  return (
    <tr aria-label="linha">
      <td>{formatarDataHoraPadraoBR(item?.data_insersao?.toString()!)}</td>
      <td>{item?.elementos?.descricao}</td>
      <td>{item?.subelementos?.descricao}</td>
      <td>{item?.tipos?.descricao}</td>
      <td>{item?.subtipos?.descricao}</td>
      <td>{item?.descricao}</td>
      <td>{item?.locais?.descricao}</td>
      <td>{item?.tipos_despesas?.descricao}</td>
      <td>
        {item?.valor! < 0 ? (
          <RedFont>{item?.valor}</RedFont>
        ) : (
          <GreenFont>{item?.valor}</GreenFont>
        )}
      </td>
      <td>{item?.saldo}</td>
      <td>
        <AcoesItems id={item?.id} caminhoPrincipal="/fluxocaixa" />
      </td>
    </tr>
  );
};
