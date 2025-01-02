import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 70rem;
  padding: 0 10rem;
  border-radius: 8px;

  background-color: ${(props) => props.theme["white"]};

  display: flex;
  flex-direction: column;
`;
