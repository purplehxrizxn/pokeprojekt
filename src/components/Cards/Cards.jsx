import { useEffect, useState } from 'react'
import { Container, Error, Loading } from './styles'
import gif from '../../assets/loading.gif'
import Card from '../../components/Card/Card'
import Api  from '../../api/v2/api'


function Cards(){  

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    Api.getAllPokemons(151).then(
      (success) => {
        setLoading(false);
        setPokemons(success);
      },
      (error) => {
        setLoading(false);
        setError(error);
      }
    )
  }, []);

  if(error){
    return (
      <Error>
        <span>Error: {error}</span>
      </Error>
    )
  } else if (loading) {
    return (
      <Loading>
        <img src={gif} alt="" />
      </Loading>
    )
  } else {
    return (
      <Container>
        {pokemons.map((item, i) => (
          <Card 
  
            key={i} 
            name={item.name} 
            id={item.id}
            sprite={item.sprites.front_default}
            types={item.types}
            gen={item.game_indices[0].version.name}
  
          />
        ))}
      </Container>
    );
  }
}

export default Cards;