import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        width: 100%;
        height: 100vh;
        background-color: #eff3ff;
    }   

    a{
        color: currentColor;
        text-decoration: none;
    }

    button{
        cursor: pointer;
    }
    ul{
        list-style: none;
    }
`