import styled from "styled-components";

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin-right: 10px;
  /* justify-content: space-between; */

`;
export const Container = styled.div`

margin-top: 10px;
margin-bottom: 10px;
gap: .5em;
display: flex;
justify-content: center;
  /* justify-content: space-between; */

`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: tomato;
  transition: background-color 0.2s;
  border-radius: 15px;
  
  &:before {
      border-radius: 15px;
    position: absolute;
    content: "";
    height: 25px;
    width: 25px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: transform 0.2s;
  }
`;
export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

    /* border-radius: 1em; */

  &:checked + ${SwitchSlider} {
    background-color: #1CAF82;
  }

  &:focus + ${SwitchSlider} {
    box-shadow: 0 0 1px #1CAF82;
  }

  &:checked + ${SwitchSlider}:before {
    transform: translateX(30px);
  }
`;
