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
    scroll-behavior: smooth;
  }

  body::-webkit-scrollbar {
    width: 15px;              
  }
  
  body::-webkit-scrollbar-track {
    background: #1a1a1a;        
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: #ccc;    
    border-radius: 20px;      
    border: 5px solid #1a1a1a; 
  }
`;
 
export default GlobalStyle;