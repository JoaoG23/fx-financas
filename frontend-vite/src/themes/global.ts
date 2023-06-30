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

h1, h2, h3, h4, h5,strong{
  color:#667387;
}
  

    *{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

details {
  overflow: hidden;
  animation-name: showDetails;
  animation-duration: 1s;
}

details[open] summary ~ * {
  animation-name: showDetails;
  animation-duration: 1s;
}

@keyframes showDetails {
  0% {
    opacity: 0;
    max-height: 0;
  }
  100% {
    opacity: 1;
    max-height: 100%;
  }
}


*::-webkit-scrollbar {
  width: 15px;
  border-radius: 10px;
}

*::-webkit-scrollbar-track {
}

*::-webkit-scrollbar-thumb {
  border-radius: 20px;
}


@keyframes balancar {
  0%, 7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-5deg);
  }
  20% {
    transform: rotateZ(5deg);
  }
  25% {
    transform: rotateZ(-2deg);
  }
  30% {
    transform: rotateZ(3deg);
  }
  35% {
    transform: rotateZ(-1deg);
  }
  40%, 100% {
    transform: rotateZ(0);
  }
}


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
