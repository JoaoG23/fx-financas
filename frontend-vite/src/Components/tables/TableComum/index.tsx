import * as Style from "./styles";

type Props = {
  children:JSX.Element | JSX.Element[]
}
export const TableComum: React.FC<Props> = ({ children }) => {
  return (
      <Style.Tabela>
        {children}
      </Style.Tabela>
  );
};