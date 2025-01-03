import styled from "styled-components";

interface HoverProps {
  x: number;
  y: number;
}

export const ComponentHover = styled.div<HoverProps>`
  color: ${(props) => props.theme["white"]};
  transform: ${({ x, y }) => `translate(${x}px, ${y}px)`};
  transition: transform 0.1s ease-out;
  cursor: pointer;
`;
