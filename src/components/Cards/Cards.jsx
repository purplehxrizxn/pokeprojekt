import { useEffect, useState } from 'react'
import 
{ 
  Container, Error, Loading, 
  LoadMore, Search, OrderBy, Main 
} from './styles'
import gif from '../../assets/loading.gif'
import Card from '../../components/Card/Card'
import Api  from '../../api/v2/api'

import { IoMdArrowDropdown } from 'react-icons/io'


export default function Cards(){  

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
  }, [filter]);

  if(error){
    return (
      <>
        <Search>
            <Main>
                <span>Search for a Pokémon...</span>
                <input type="text" placeholder="Blastoise, Umbreon, Lapras..." name="" id="" />
            </Main>
            <OrderBy>
                <span>
                    or filter by<span> type</span>:
                </span>
                    <label htmlFor="select" className="select" style={{cursor: 'not-allowed'}}>
                        <IoMdArrowDropdown />
                        <select name="" id="select" 
                          onChange={ 
                          (e) => {
                            setFilter(e.target.value);
                            setLoading(true); 
                          }
                        }>
                            <option defaultValue >Select</option>
                            <option value="bug">Bug</option>
                            <option value="dark">Dark</option>
                            <option value="dragon">Dragon</option>
                            <option value="electric">Electric</option>
                            <option value="fairy">Fairy</option>
                            <option value="fighting">Fighting</option>
                            <option value="fire">Fire</option>
                            <option value="flying">Flying</option>
                            <option value="ghost">Ghost</option>
                            <option value="grass">Grass</option>
                            <option value="ground">Ground</option>
                            <option value="ice">Ice</option>
                            <option value="normal">Normal</option>
                            <option value="poison">Poison</option>
                            <option value="psychic">Psychic</option>
                            <option value="rock">Rock</option>
                            <option value="steel">Steel</option>
                            <option value="water">Water</option>
                        </select>
                    </label>
            </OrderBy>
        </Search>
        <Error>
          <span>Error: {error}</span>
        </Error>
      </>
    )
  } else {
    return (
      <div style={{paddingBottom: '25px'}} >
        <Search>
            <Main>
                <span>Search for a Pokémon...</span>
                <input type="text" placeholder="Blastoise, Umbreon, Lapras..." />
            </Main>

            <OrderBy>
                <span>
                    or filter by<span> type</span>:
                </span>
                    <label htmlFor="select" className="select">
                        <IoMdArrowDropdown />
                        <select name="" id="select" 
                          onChange={ 
                          (e) => {
                            setFilter(e.target.value);
                            setLoading(true); 
                          }
                        }>
                            <option defaultValue value="" >Select</option>
                            <option value="bug">Bug</option>
                            <option value="dark">Dark</option>
                            <option value="dragon">Dragon</option>
                            <option value="electric">Electric</option>
                            <option value="fairy">Fairy</option>
                            <option value="fighting">Fighting</option>
                            <option value="fire">Fire</option>
                            <option value="flying">Flying</option>
                            <option value="ghost">Ghost</option>
                            <option value="grass">Grass</option>
                            <option value="ground">Ground</option>
                            <option value="ice">Ice</option>
                            <option value="normal">Normal</option>
                            <option value="poison">Poison</option>
                            <option value="psychic">Psychic</option>
                            <option value="rock">Rock</option>
                            <option value="steel">Steel</option>
                            <option value="water">Water</option>
                        </select>
                    </label>
            </OrderBy>
        </Search>

        { loading ? 
        (<Loading>
          <img src={gif} alt="" />
        </Loading>) 
        
        : 
        
        (<>
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
          {limit <= pokemon.length ? <><LoadMore onClick={ () => setLimit(limit + 20) }>Load more...</LoadMore></> : false}
        </>
        )
        }
        
      </div>
    );
  }
}