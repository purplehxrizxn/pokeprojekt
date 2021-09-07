import { useEffect, useState } from 'react'

import { 
  Container, Loading, NotFound,
  LoadMore, Search, OrderBy, Main,
  Wrapper, ButtonTop
} from './styles'

import gif from '../../assets/loading.gif'
import Card from '../Card/Card'
import Api  from '../../api/v2/api'

import { IoMdArrowDropdown } from 'react-icons/io'


export default function MainScreen({ backToTop }){  

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState([]); 
  const [pokemonFilter, setPokemonFilter] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('');
  const [limit, setLimit] = useState(10);

  const filtersType = [
    'all', 'bug', 'dark', 'dragon',
    'electric', 'fairy', 'fighting',
    'fire', 'flying', 'ghost', 'grass',
    'ground', 'ice', 'normal', 'poison',
    'psychic', 'rock', 'steel', 'water'
  ];

  function handlePokemonFilter(searchContent = 'all', byTextInput = false) {
    var result = [];

    if(!byTextInput) {
      if (searchContent !== 'all') {
        result = pokemon.filter( 
          pkm => {
            return pkm.types.some(
                type => type.type.name === searchContent ? true : false
            )
        })
      }
      setCurrentFilter(searchContent);  
    } else {
      result = pokemon.filter( 
        pkm => (pkm.species.name).indexOf(searchContent.replace(' ', '').toLowerCase()) > -1 ? true : false);
    }

    backToTop();
    setLimit(10); 
    searchContent === 'all' ? setPokemonFilter(pokemon) : setPokemonFilter(result);
  }

  function setFavoritesFirst(a) {
    if (a.favorite) {
      return -1;
    }
  }

  function handleArray(array, limit){
    let result = array.slice(0, limit);

    result = result.sort(setFavoritesFirst);

    return result;
  }

  function handleFavorite(id){
    const pokeFavs = pokemon.map(poke => {
      return poke.id === id ? { ...poke, favorite: !poke.favorite } : poke
    });

    setPokemon(pokeFavs);
  }

  function capitalize(string){
    return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
  }

  useEffect(() => {
    Api.getAllPokemon().then(
      (success) => {
        setLoading(false);
        setPokemon(success);
      },
      (error) => {
        setLoading(false);
        setError(error);
      })
  }, []);

  useEffect(() => {
    setPokemonFilter(pokemon);
  }, [pokemon]);

  useEffect(() => {

  }, [currentFilter]);

  if(!error){
    return (
      <Wrapper>
        <Search>
            <Main>
                <span>Search for a Pokémon...</span>
                <input type="text" onClick={() => backToTop()} placeholder="Blastoise, Umbreon, Lapras..." onChange={({ target }) => { handlePokemonFilter(target.value, true)}} />
            </Main>

            <OrderBy>
                <span> 
                    or filter by<span> type</span>:
                </span>
                    <label htmlFor="select" className="select">
                        <IoMdArrowDropdown />
                        <select name="" id="select" 
                          onChange={(e) => handlePokemonFilter(e.target.value)}>
                            <option defaultValue disabled>...</option>
                            { filtersType.map((type, i) => {
                              return (<option key={i} value={type} selected={currentFilter === type}>{capitalize(type)}</option>)
                            }) }
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
          { handleArray(pokemonFilter, limit).map(({ name, id, sprites, types, game_indices, favorite}, i) => (
            <Card 
              key={i} 
              name={name} 
              id={id}
              sprite={sprites.front_default}
              types={types}
              gen={((game_indices[0]) ? game_indices[0].version.name : 'Special')}
              getFilter={(type) => handlePokemonFilter(type)}
              favoritePokemon={(e) => handleFavorite(e)}
              favorite={favorite}
            />
          )) }
          </Container>
          { limit <= pokemonFilter.length ? 
            <>
              <LoadMore onClick={() => setLimit(limit + 10)}>show more</LoadMore>
            </> 
            : false }

          { !pokemonFilter.length ? 
            <NotFound>We don't found any. 
              <span>Try again.</span>
            </NotFound> 
            : false }

            { pokemonFilter.length > 3 ?
              <>
                <ButtonTop onClick={() =>  backToTop()}>BACK TO TOP</ButtonTop>
              </> 
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