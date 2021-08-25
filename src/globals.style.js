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
    background: #443DA5;
  }

  ::-webkit-scrollbar {
    width: 20px;              
  }
  
  ::-webkit-scrollbar-track {
    background: #1e1e1e;        
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #ccc;    
    border-radius: 20px;      
    border: 5px solid #1a1a1a; 
    transition: background .5s ease;

    &:hover {
      background: #f2f2f2;
    }
  }
`;
 
export default GlobalStyle;