import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Press Start 2P', cursive;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: 100;
    letter-spacing: 1px;
  }

  body, html {
    font-size: 62.5%;
  }
`;
 
export default GlobalStyle;