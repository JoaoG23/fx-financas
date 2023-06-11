import { createGlobalStyle } from "styled-components";
import { RobotoBold } from "../fonts/styles";
const GlobalStyle = createGlobalStyle`
    ${RobotoBold}

    :root{
    --tamanhoPadrao: 0.5em;
      // size

      --size-20:20px
    }

    *:focus {
    outline: none;
}

h1, h2, h3, h4, strong{
  color:#667387;
}
  

    *{
      font-family: 'Roboto', sans-serif;
        margin:0;
        padding:0;
        box-sizing: border-box;
        
    }

    a{
      color:#667387;
      text-decoration: none;
    }

    body {
    
    background-color: #fff;
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
      transform: translateX(0vw);
      opacity: 1;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
    max-width: 300px;
  }

`;

export default GlobalStyle;
