import styled from "styled-components";

export const NavigationButton = styled.button`
  position: fixed;
  top: 2rem;
  right: 2rem;

  z-index: 9999;
  padding: 1.5rem;
  background-color: ${(props) => props.theme["dark-500"]};
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out;

  opacity: 0;
  visibility: hidden;

  &.visible {
    opacity: 1;
    visibility: visible;
  }

  display: inline-flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme["blue-500"]};
  }
`;
