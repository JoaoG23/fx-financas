import { Blue } from "./styles";
type Props = {
  children?: any;
};
export const BlueFont: React.FC<Props> = ({ children }) => {
  return <Blue>{children}</Blue>;
};
