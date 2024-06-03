import styled from "styled-components";

export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 24px;
  margin-right: 10px;
  /* justify-content: space-between; */
`;
export const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 0.5em;
  display: flex;
  justify-content: center;

  p {
    color: gray;
  }
`;

export const SwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #CBD5E0;
  transition: background-color 0.2s;
  border-radius: 13px;

  &:before {
    border-radius: 13px;
    position: absolute;
    content: "";
    height: 19px;
    width: 19px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: transform 0.2s;
  }
`;
export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;


  &:checked + ${SwitchSlider} {
    background-color: #0ACC8E;
  }

  &:focus + ${SwitchSlider} {
    box-shadow: 0 0 1px #0ACC8E;
  }

  &:checked + ${SwitchSlider}:before {
    transform: translateX(20px);
  }
`;
