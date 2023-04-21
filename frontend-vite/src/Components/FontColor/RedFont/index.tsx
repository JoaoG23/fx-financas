
import { Red }  from './styles';
type Props = {
    children?:any;
}
const RedFont:React.FC<Props> = ({children}) => {
    return(<Red>{children}</Red>)
}

export default RedFont;