import React from 'react';
import { RedColor }  from './styles';
type Childrens = {
    children?:JSX.Element | JSX.Element[] | string;
}
export const RedBadge:React.FC<Childrens> = ({children}) => {
    return(<RedColor>{children}</RedColor>)
}

