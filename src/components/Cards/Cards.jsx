import { useState, useEffect  } from 'react'
import { Container } from './styles'
import Card from '../../components/Card/Card'

import api  from '../../api/api'

function Cards(){  
          
    return (
      <Container>
        {/* {items.map((item, i) => (
          <Card key={i} name={item.name} url={item.url}/>
        ))} */}
        <Card/>
      </Container>
    );
}

export default Cards;