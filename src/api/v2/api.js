import axios from 'axios';
export default class Api {

    static async getAllPokemon() {
        const response = await (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1200`)).data.results;
        const data = Promise.all(
            response.map( async (pokemon) => await (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)).data)
        )

        return data;
    }
}


