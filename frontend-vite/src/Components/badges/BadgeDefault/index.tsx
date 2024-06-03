import { Badge } from "./styles";

type Props = {
  descricao: string;
  cor?: "verde" | "vermelho";
};
// Uso do componente Badge
export const BadgeDefault: React.FC<Props> = ({ descricao, cor }) => {
  return <Badge cor={cor}>{descricao}</Badge>;
};
