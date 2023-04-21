import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";
type Props = {
  caminho?: string;
};
export const LinkEditar: React.FC<Props> = ({ caminho = "" }) => {
  return (
    <div>
      <Link to={caminho}>
        <SecondaryButton>
          <BsFillPencilFill />
        </SecondaryButton>
      </Link>
    </div>
  );
};
