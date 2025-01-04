import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
        scrollbar-color: ${(props) => props.theme["gray-500"]} ${(props) =>
  props.theme["dark-500"]};
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: ${(props) => props.theme["dark-500"]};
    }

    ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme["gray-500"]};
        border-radius: 4px;
    }

    :focus {
        outline: 0;
    }

    body{
        background-color: ${(props) => props.theme["white"]};
        color: ${(props) => props.theme["dark-500"]};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: "Noto Sans PhagsPa", serif;
        font-weight: 400;
        font-size: 1rem;
    } 
`;
