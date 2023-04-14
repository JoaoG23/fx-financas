import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
type Props = {
    caminho?: string;
}
export const LinkEditar: React.FC<Props> = ({ caminho = '' }) => {
    return (
        <div>
            <Link to={caminho}>
                <BsFillPencilFill />
            </Link>
        </div>
    )
}



