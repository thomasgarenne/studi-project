import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        transition: linear 0.25s;
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor};
        font-family: Montserrat;
    }

    button {
        font-family: Montserrat;
        padding: 10px 20px;
        color: ${(props) => props.theme.mainColor};
        background-color: ${(props) => props.theme.backgroundColor};
        cursor: pointer;
        border: 1px solid;
        transition: linear 0.25s;
    }

    button:hover {
        color: ${(props) => props.theme.backgroundColor};
        background-color: ${(props) => props.theme.mainColor};
    }

    h1 {
        font-size: 1.6rem;
    }

    h2 {
        font-size: 1.4rem;
    }

    h1, h2, h3, h4, h5 {
        letter-spacing: 2px;
    }
`;

export default GlobalStyle;