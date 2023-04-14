import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";

type Props = {
  caminho?: string;
};
export const LinkVisualizar: React.FC<Props> = ({ caminho = "" }) => {
  return (
    <div>
      <Link to={caminho} role="visualizar">
        <BsFillEyeFill />
      </Link>
    </div>
  );
};
