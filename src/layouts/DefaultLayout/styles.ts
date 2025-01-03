import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 70rem;
  border-radius: 8px;
  margin: 0 auto;

  background-color: ${(props) => props.theme["white"]};

  display: flex;
  flex-direction: column;
`;
