import React from 'react';
import { CheckBoxWrapper,CheckBox,CheckBoxLabel } from './styles';

type AtribuitesSwitch = {
    checked?:boolean | any;
    onChange?: React.ChangeEventHandler ;
}

const Switch:React.FC<AtribuitesSwitch> = ({ checked,onChange }) => {
    return (
        <CheckBoxWrapper>
          <CheckBox id="checkbox" type="checkbox" checked={checked} onChange={onChange} />
          <CheckBoxLabel htmlFor="checkbox" />
        </CheckBoxWrapper>
    );
  };
  
  export default Switch;