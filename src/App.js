import React from 'react'
import GlobalStyle from './globals.style.js'


import Cards from './components/Cards/Cards'
import Body from './components/Body/Body'
import Container from './components/Container/Container'
import { TypeProvider } from './Context/TypeContext'


export default function App() {
  return (
    <Body>
      <Container>
        <TypeProvider>
          <Cards />    
        </TypeProvider>
      </Container>
      <GlobalStyle/>
    </Body>
  );
}

