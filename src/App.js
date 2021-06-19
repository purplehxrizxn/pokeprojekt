import React from 'react'
import GlobalStyle from './globals.style.js'
import Body from './components/Body/Body'
import Cards from './components/Cards/Cards'
import Card from './components/Card/Card'


function App() {
  return (
    <Body>
    <Cards />    
      <GlobalStyle/>
    </Body>
  );
}

export default App;
