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
  border: 2px solid #5867da;
  padding: 0.7em;
  border-radius: 50%;
  background-color: white;

  :checked {
    background-image: radial-gradient(white 40%, #5867da 50%);
  }
`;

export const RedRadio = styled(Radio)`
  border: 2px solid #F66045;
  :checked {
    background-image: radial-gradient(white 40%, #F66045 50%);
  }
`;
export const GreenRadio = styled(Radio)`
  border: 2px solid #0acc8e;
  :checked {
    background-image: radial-gradient(white 40%, #0acc8e 50%);
  }
`;
