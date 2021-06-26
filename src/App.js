import React from 'react'
import GlobalStyle from './globals.style.js'

/* Importar os componentes na ordem em que foram criados
  (de baixo pra cima)
*/

import Header from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Body from './components/Body/Body'
import Container from './components/Container/Container'


export default function App() {
  return (
    <Body>
      <Container>
        <Header />
        <Cards />    
      </Container>
      <GlobalStyle/>
    </Body>
  );
}

