import React from 'react'
import GlobalStyle from './globals.style.js'

import Cards from './components/Cards/Cards'
import Body from './components/Body/Body'
import Container from './components/Container/Container'

export default function App() {
  return (
    <Body>
      <Container>
          <Cards />    
      </Container>
      <GlobalStyle/>
    </Body>
  );
}

