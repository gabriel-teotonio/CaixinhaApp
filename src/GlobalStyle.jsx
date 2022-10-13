import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: sans-serif;
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
    .App{
        display: grid;
        grid-template-columns: 12rem auto;
        height: 100vh;
    }
`