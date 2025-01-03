import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body{
        background-color: ${(props) => props.theme["white"]};
        color: ${(props) => props.theme["dark-500"]};
    }

    body, input, textarea, button{
        font-family: "Noto Sans PhagsPa", serif;
        font-weight: 400;
        font-size: 1rem;
    } 
`;
