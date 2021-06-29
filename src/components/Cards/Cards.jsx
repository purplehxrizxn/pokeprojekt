import { useEffect, useState } from 'react'
import { Container, Error, Loading, LoadMore } from './styles'
import gif from '../../assets/loading.gif'
import Card from '../../components/Card/Card'
import Api  from '../../api/v2/api'

function Cards(){  

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [limit, setLimit] = useState(20);
  const [filter, setFilter] = useState('');

  function handleArray(array, limit){
    let result = array.slice(0, limit);

    return result;
  }

  useEffect(() => {
    Api.filterPokemonType(filter).then(
      (success) => {
        setLoading(false);
        setPokemon(success);
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
      <div style={{paddingBottom: '25px'}}>
        <Container>
          { handleArray(pokemon, limit).map((item, i) => (
            <Card 
    
              key={i} 
              name={item.name} 
              id={item.id}
              sprite={item.sprites.front_default}
              types={item.types}
              gen={( item.game_indices[0]) ? item.game_indices[0].version.name : 'Special'}
    
            />
          )) }
        </Container>
          {(limit <= pokemon.length) ? <LoadMore onClick={ () => setLimit(limit + 20) }>Load more...</LoadMore> : false}
      </div>
    );
  }
}

export default Cards;