import { BlueFont } from "../../../../../Components/FontColor/BlueFont";
import { GreenFont } from "../../../../../Components/FontColor/GreenFont";
import RedFont from "../../../../../Components/FontColor/RedFont";
import { BadgeDefault } from "../../../../../Components/badges/BadgeDefault";

import { Programacao } from "../../../../../types/Programacao";
import { converterValorEmMoedaBR } from "../../../../../utils/conversao/converterValorEmMoedaBR/converterValorEmMoedaBR";
import { AcoesItems } from "../../AcoesItems";

type Props = {
  item: Programacao;
};

export const LinhaItemProgramacao: React.FC<Props> = ({ item }) => {
  const valorGasto = converterValorEmMoedaBR(item?.valor!);
  return (
    <tr aria-label="linha">
      <td>
        {item?.ativo ? (
          <BadgeDefault descricao="Ativado" cor="verde" />
        ) : (
          <BadgeDefault descricao="Desativado" />
        )}
      </td>
      <td>{item?.elementos?.descricao}</td>
      <td>{item?.subelementos?.descricao}</td>
      <td>{item?.tipos?.descricao}</td>
      <td>{item?.subtipos?.descricao}</td>
      <td>
        <BlueFont>{item?.descricao}</BlueFont>
      </td>
      <td>{item?.tipos_despesas?.descricao}</td>
      <td>{item?.locais?.descricao}</td>
      <td>
        {item?.valor! < 0 ? (
          <RedFont>{valorGasto}</RedFont>
        ) : (
          <GreenFont>{valorGasto}</GreenFont>
        )}
      </td>
      <td>
        <AcoesItems id={item?.id} caminhoPrincipal="/programacao" />
      </td>
    </tr>
  );
};
