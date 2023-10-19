import styled from "styled-components";

export const Container = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  gap: 0.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Radio = styled.input`
  appearance: none;
  border: 2px solid #F26B28;
  padding: .7em;
  border-radius: 50%;
  background-color: white;

  :checked{
    background-image:radial-gradient(white 40%, #F26B28 50%);
  }
`;

