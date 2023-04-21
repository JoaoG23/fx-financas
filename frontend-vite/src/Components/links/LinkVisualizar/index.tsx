import { BsFillEyeFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";

type Props = {
  caminho?: string;
};
export const LinkVisualizar: React.FC<Props> = ({ caminho = "" }) => {
  return (
    <div>
      <Link to={caminho} role="visualizar">
        <SecondaryButton>
          <BsFillEyeFill />
        </SecondaryButton>
      </Link>
    </div>
  );
};
