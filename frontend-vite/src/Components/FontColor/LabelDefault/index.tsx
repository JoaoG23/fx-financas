import { Label } from "./styles";
type Props = {
  children?: string | JSX.Element | (string | JSX.Element)[];
};
export const LabelDefault: React.FC<Props> = ({ children }) => {
  return <Label>{children}</Label>;
};
