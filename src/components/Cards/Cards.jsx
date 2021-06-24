import { Container } from './styles'
import Card from '../../components/Card/Card'
import pokemons  from '../../api/api'

function Cards(){  

  console.log(pokemons);
          
  return (
    <Container>
      {pokemons.map((item, i) => (
        <Card 

          key={i} 
          name={item.name} 
          id={item.order}
          sprite={item.sprites.front_default}
          types={item.types}

        />
      ))}
    </Container>
  );
}

export default Cards;