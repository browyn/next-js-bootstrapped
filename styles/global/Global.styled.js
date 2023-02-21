import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Resets */
    
    html {
        scroll-behavior: smooth;
    }

    * {
        position: relative;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Satoshi-Variable';
        width: 100%;
        min-height: 80vh;
    } 
    

    ul, ol {
        list-style-type: none;
    }

    a {
        color: initial;
        text-decoration: none;

        &:hover, 
        &:visited, 
        &:focus {
            color: initial;
            text-decoration: none;
        }
    }

    label {

    }

    main {
        margin-top: 50px;
    }

    input {
        border: none;
        color: inherit;
        width: 100%;
        height: 100%;
        outline: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
    }

    /* Typograhy */

    p {

    }

    span {
    }

    small {

    }

`;
