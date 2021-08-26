import { useEffect, useState } from 'react'

import { 
  Container, Loading, NotFound,
  LoadMore, Search, OrderBy, Main, Wrapper 
} from './styles'

import gif from '../../assets/loading.gif'
import Card from '../../components/Card/Card'
import Api  from '../../api/v2/api'

import { IoMdArrowDropdown } from 'react-icons/io'


export default function Cards(){  

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]);
  const [pokemonFilter, setPokemonFilter] = useState([]);
  const [limit, setLimit] = useState(10);

  function handlePokemonFilter(searchContent = 'null', byInput = false) {
    const result = [];

    if(!byInput) {
      if (searchContent === 'null') {
        setPokemonFilter(pokemon);
      } else {
        pokemon.forEach( pkm => {
          pkm.types.forEach(
              type => type.type.name === searchContent ? result.push(pkm) : false
          )
        })
        setPokemonFilter(result);
      }
    } else {
      pokemon.forEach( 
        pkm => (pkm.species.name).indexOf(searchContent.replace(' ', '').toLowerCase()) > -1 ? result.push(pkm) : false);
      setPokemonFilter(result);
    }
  }

  function handleArray(array, limit){
    let result = array.slice(0, limit);

    return result;
  }

  useEffect(() => {
    Api.getAllPokemon().then(
      (success) => {
        setLoading(false);
        setPokemon(success);
        setPokemonFilter(success);
      },
      (error) => {
        setLoading(false);
        setError(error);
      })
  }, []);

  if(!error){
    return (
      <Wrapper>
        <Search>
            <Main>
                <span>Search for a Pokémon...</span>
                <input type="text" placeholder="Blastoise, Umbreon, Lapras..." onChange={ ({ target }) => { handlePokemonFilter(target.value, true)} } />
            </Main>

            <OrderBy>
                <span>
                    or filter by<span> type</span>:
                </span>
                    <label htmlFor="select" className="select">
                        <IoMdArrowDropdown />
                        <select name="" id="select" 
                          onChange={ (e) => { handlePokemonFilter(e.target.value) } }>
                            <option defaultValue disabled value="">...</option>
                            <option value="null">All</option>
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
          { handleArray(pokemonFilter, limit).map(({ name, id, sprites, types, game_indices}, i) => (
            <Card 
    
              key={i} 
              name={name} 
              id={id}
              sprite={sprites.front_default}
              types={types}
              gen={ ((game_indices[0]) ? game_indices[0].version.name : 'Special') }
              getFilter={ (e) => { handlePokemonFilter(e)} }

            />
          )) }
          </Container>
          { limit <= pokemonFilter.length ? 
            <>
              <LoadMore onClick={ () => setLimit(limit + 10) }>show more</LoadMore>
            </> 
            : false }

          { !pokemonFilter.length ? 
            <NotFound>We don't found any. 
              <span>Try again.</span>
            </NotFound> 
            : false }
        </>
        )}
        
      </Wrapper>
    );
  } else {
    return (
      <>
        <Search>
            <Main>
                <span>Search for a Pokémon...</span>
                <input type="text" placeholder="Blastoise, Umbreon, Lapras..." name="search" id="" />
            </Main>
            <OrderBy>
                <span>
                    or filter by<span> type</span>:
                </span>
                    <label htmlFor="select" className="select" style={{pointerEvents: 'none', cursor: 'not-allowed'}}>
                        <IoMdArrowDropdown />
                        <select id="select">
                          <option value="" selected disabled>Select</option>
                        </select>
                    </label>
            </OrderBy>
        </Search>
          <NotFound>Error: {error}<span> Press F5 to reload.</span></NotFound>
      </>
    );
  }
}