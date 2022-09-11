import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        font-family: ${({ theme }) => theme.fonts.nunito};
        margin: 0
    }

    h1, h2, h3, h4, p {
        margin: 0
    }

    h1, h2 {
        font-weight: 800;
    }

    a, a:visited, a:hover {
        color: black;
        text-decoration: none;
    }
    
`;

export default GlobalStyle;
