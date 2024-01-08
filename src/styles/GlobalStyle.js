import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
    --DarkBlue: hsl(233, 26%, 24%);
    --LimeGreen: hsl(136, 65%, 51%);
    --BrightCyan: hsl(192, 70%, 51%);

    --GrayishBlue: hsl(233, 8%, 62%);
    --LightGrayishBlue: hsl(220, 16%, 96%);
    --VeryLightGray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);
    --Black: hsl(0, 0%, 0%);
    --bgGradient: linear-gradient(40deg, rgba(73,73,128,1) 0%, rgba(192,188,249,1) 40%, rgba(165,0,255,1) 80%);
}

*{
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
}

    html {
        font-size: 62.5%;
    }
    body {   
        font-family: 'Public Sans', sans-serif;
        background: var(--bgGradient);
    }
    a{
        font-weight: bold;
        font-size: 1.4rem;
        transition: color 0.3s ease;
        color: var(--Black);
        &:hover {
            color: var(--White);
        }
    }

    img {
        width: 100%;
    }
`;

export default GlobalStyle;
