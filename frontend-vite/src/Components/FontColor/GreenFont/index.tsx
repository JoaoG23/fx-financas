import * as Color from "./styles";
type Props = {
  children?: string | number | JSX.Element | JSX.Element[];
};
export const GreenFont: React.FC<Props> = ({ children }) => {
  return <Color.Green>{children}</Color.Green>;
};
