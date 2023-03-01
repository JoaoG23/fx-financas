import React from 'react';
import { GreenColor }  from './styles';
type Childrens = {
    children?:JSX.Element | JSX.Element[] | string;
}
const GreenBadge:React.FC<Childrens> = ({children}) => {
    return(<GreenColor>{children}</GreenColor>)
}

export default GreenBadge;