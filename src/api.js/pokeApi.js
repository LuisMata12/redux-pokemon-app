import axios from 'axios'

 export const pokemonPetition = axios.create({
    baseURL:'https://pokeapi.co/api/v2/pokemon',
})

export default pokemonPetition
