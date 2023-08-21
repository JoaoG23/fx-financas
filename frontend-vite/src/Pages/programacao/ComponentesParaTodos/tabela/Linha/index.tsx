import { BlueFont } from "../../../../../Components/FontColor/BlueFont";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import RedFont from "../../../../../Components/FontColor/RedFont";

import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";
import { Programacao } from "../../../../../types/Programacao";
import { formatarDataHoraPadraoBR } from "../../../../../utils/formatadoresDatahora/formatarDataHoraPadraoBR/formatarDataHoraBR";
import { AcoesItems } from "../../AcoesItems";

type Props = {
  item: Programacao;
};

export const LinhaItemProgramacao: React.FC<Props> = ({ item }) => {
  return (
    <tr aria-label="linha">
      <td>{item?.elementos?.descricao}</td>
      <td>{item?.subelementos?.descricao}</td>
      <td>{item?.tipos?.descricao}</td>
      <td>{item?.subtipos?.descricao}</td>
      <td>
        <BlueFont>{item?.descricao}</BlueFont>
      </td>
      <td>{item?.locais?.descricao}</td>
      <td>
        {item?.valor! < 0 ? (
          <RedFont>{item?.valor}</RedFont>
        ) : (
          <GreenFont>{item?.valor}</GreenFont>
        )}
      </td>
      <td>
        <AcoesItems id={item?.id} caminhoPrincipal="/programacao" />
      </td>
    </tr>
  );
};
