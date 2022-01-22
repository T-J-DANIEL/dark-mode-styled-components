import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{box-sizing:border-box;}
    *,*::before,*::after{box-sizing:inherit;}
   
    body {
    margin: 0;
    padding: 0;
    outline:2px solid blue;
    font-family: monospace;
    background-color: ${({ theme, currentTheme }) =>
      theme[currentTheme].bgColor};
    color: ${({ theme, currentTheme }) => theme[currentTheme].textColor};
    min-height: 100vh;
    transition: all 0.7s ease;
    }
    h1,h2{
    margin: 0;
    color: ${({ theme, currentTheme }) => theme[currentTheme].titleColor};
    }
`

export default GlobalStyles