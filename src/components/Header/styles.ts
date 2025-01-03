import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2rem 2.5rem;

  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

export const HeaderNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

  a {
    position: relative;
  }

  a::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 50%;
    width: 6px;
    height: 6px;
    background-color: ${(props) => props.theme["white"]};
    border-radius: 50%;
    transform: translateX(-50%) scale(0);
    transition: transform 0.4s ease;
  }

  a.active::after,
  a:hover::after {
    transform: translateX(-50%) scale(1);
  }
`;
