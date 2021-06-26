import axios from 'axios';


export default class Api {

    static async getAllPokemons(limit) {
        const response = await (await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)).data.results;
        const data = Promise.all(
            response.map( async (pokemon) => await (await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)).data)
        )

        return data;
    }

    static async getPokemon(name) {
        const response = await (await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)).data;

        return response;
    }
}