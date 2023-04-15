import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SecondaryButton } from "../../Buttons/SecondaryButton/ButtonDark";
type Props = {
  caminho?: string;
  informacao?: string;
};
export const LinkDeletar: React.FC<Props> = ({
  caminho = "",
  informacao = "Deletar",
}) => {
  return (
    <div>
      <Link to={caminho}>
        <SecondaryButton>
          <BsFillTrashFill />
        </SecondaryButton>
      </Link>
    </div>
  );
};
