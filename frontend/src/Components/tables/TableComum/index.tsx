import { Container } from "./styles";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const TableComum: React.FC<Props> = ({ children }) => {
  return <Container>{children}</Container>;
};
