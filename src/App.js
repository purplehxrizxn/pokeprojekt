import React from 'react'
import GlobalStyle from './globals.style.js'

import Body from './components/Body/Body'
import Container from './components/Container/Container'

export default function App() {
  return (
    <Body>
      <Container/>
      <GlobalStyle/>
    </Body>
  );
}

