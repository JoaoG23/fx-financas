import { createGlobalStyle } from "styled-components";
import { VigaFont } from "../fonts/styles";
const GlobalStyle = createGlobalStyle`
    ${VigaFont}

    :root{
      --yellow:#dcfc34;
      --blue:#20e5e0;
      --dark:#323240;
      --white:#fff;


      // size

      --size-20:20px
    }

    *:focus {
    outline: none;
}


    *{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    a{
      text-decoration: none;
    }

    body {
    
    background-color: var(--dark);
    padding: 0;
    margin: 0;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    summary{
      padding:4px;
    list-style-type: '+';
    
}
    

    details[open] summary{
      transition: 1s;
        list-style-type: '-';
    }

/* *::-webkit-scrollbar {
  width: 15px;
  border-radius: 10px;
}

*::-webkit-scrollbar-track {
}

*::-webkit-scrollbar-thumb {
  border-radius: 20px;
} */




@keyframes entradaSuave {
    0% {
      transform: translateX(100vw);
      opacity: 0;
    }
    100% {
      transform: translateX(0vh);
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
    max-width: 300px;
  }

`;

export default GlobalStyle;
