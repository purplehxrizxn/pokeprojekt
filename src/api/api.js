import axios from 'axios'

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

const pokemons = [];

async function returnPokemons(array){
    await api.get('pokemon?limit=1000')
    .then(res => res.data.results)
    .then(
        result => {
            result.forEach( pokemon => {
                api.get(`pokemon/${pokemon.name}`)
                .then( res => res.data)
                .then(
                    result => {
                        array.push(result);
                    },
                    error => {console.log('erro!')}
                )
            });
        },
        error => {
            console.log('erro!');
        }
    )
    return array;
}

returnPokemons(pokemons);

export default pokemons;
