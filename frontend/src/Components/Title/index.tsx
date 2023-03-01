import React from 'react';
import { StyleTitle }  from './styles';
type Childrens = {
    children?: string | JSX.Element | JSX.Element[];
}
const Title:React.FC<Childrens> = ({ children }) => {
    return(<StyleTitle>{children}</StyleTitle>);
}

export default Title;