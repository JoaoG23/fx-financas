import { ItemFluxoCaixa } from "../../../../../types/ItemFluxoCaixa";

type Props = {
  item: ItemFluxoCaixa;
};

export const LinhaItemFluxocaixa: React.FC<Props> = ({ item }) => {
  return (
    <tr aria-label="linha">
      <td>{item?.descricao}</td>
      <td>{item?.valor}</td>
    </tr>
  );
};
