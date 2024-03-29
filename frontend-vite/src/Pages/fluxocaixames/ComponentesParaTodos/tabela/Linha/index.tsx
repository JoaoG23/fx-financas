import { BlueFont } from "../../../../../Components/FontColor/BlueFont";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import RedFont from "../../../../../Components/FontColor/RedFont";

import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";

import { AcoesItems } from "../../../../../Components/acoes/AcoesItems";

import { converterValorEmMoedaBR } from "../../../../../utils/conversao/converterValorEmMoedaBR/converterValorEmMoedaBR";
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
      <td>
        <BlueFont>{item?.descricao}</BlueFont>
      </td>
      <td>{item?.locais?.descricao}</td>
      <td>{item?.tipos_despesas?.descricao}</td>
      <td>
        {item?.valor! < 0 ? (
          <RedFont>{converterValorEmMoedaBR(item?.valor!)}</RedFont>
        ) : (
          <GreenFont>{converterValorEmMoedaBR(item?.valor!)}</GreenFont>
        )}
      </td>
      <td>{converterValorEmMoedaBR(item?.saldo!)}</td>
      <td>
        <AcoesItems id={item?.id} caminhoPrincipal="/fluxocaixa" />
      </td>
    </tr>
  );
};
