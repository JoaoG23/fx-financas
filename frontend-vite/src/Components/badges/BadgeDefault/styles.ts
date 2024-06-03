import styled from "styled-components";

interface BadgeProps {
  cor?: "verde" | "vermelho";
}
// Criação do componente Badge
export const Badge = styled.span<BadgeProps>`
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: ${props => props.cor === 'verde' ? '#0ACC8E' : 'tomato'};
  color: #fff; // Texto branco
`;
