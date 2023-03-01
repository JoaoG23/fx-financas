import React from 'react';
import { RedColor }  from './styles';
type Childrens = {
    children?:JSX.Element | JSX.Element[] | string;
}
const RedBadge:React.FC<Childrens> = ({children}) => {
    return(<RedColor>{children}</RedColor>)
}

export default RedBadge;