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

  &.active {
    background-color: ${(props) => props.theme["blue-500"]};
  }

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

export const Navigation = styled.div`
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  max-width: 32rem;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme["dark-500"]};

  transition: clip-path 1s ease-out;
  clip-path: ellipse(0% 70% at 200% 50%);

  &.visible {
    clip-path: ellipse(150% 100% at 100% 50%);
  }
`;

export const NavigationContent = styled.div`
  padding: 6rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
`;

export const NavigationTitle = styled.div`
  color: ${(props) => props.theme["gray-500"]};

  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    font-size: 0.65rem;
    font-weight: 700;
  }

  hr {
    border: none;
    height: 1px;
    background-color: ${(props) => props.theme["gray-500"]};
  }
`;

export const NavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  a {
    font-size: 3rem;
    position: relative;
  }

  a::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -1.5rem;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    transform: translateY(-50%) scale(0);
    transition: transform 0.4s ease;
  }

  a.active::after,
  a:hover::after {
    transform: translateY(-50%) scale(1);
  }
`;

export const NavigationSocials = styled.div`
  color: ${(props) => props.theme["gray-500"]};

  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 0.65rem;
    font-weight: 700;
  }

  & > div {
    display: flex;
    gap: 1.5rem;

    a {
      font-size: 0.875rem;
      position: relative;
      padding-bottom: 0.5rem;
    }

    a::after {
      content: " ";
      width: 0%;
      height: 1px;
      background-color: ${(props) => props.theme["white"]};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s ease-in-out;
    }

    a:hover::after {
      width: 100%;
    }
  }
`;
