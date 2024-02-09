import { useDispatch, useSelector } from "react-redux";
import pokemonPetition from "../api.js/pokeApi";
import { complitPetition, loadingPetition ,pokemonsPetitionS,} from "../store/slice/pokemonSlice";


export const usePetition =()=>{
    const pokemons = useSelector(state=>state.pokemon);
    const dispatch= useDispatch();

    const getPokemons = async(offset=0)=>{
        dispatch(loadingPetition());
        const pokemonResults = await pokemonPetition.get(`?$limit=5&offset=${offset}`);
        dispatch(pokemonsPetitionS(pokemonResults.data['results']));
        // console.log(pokemonResults.data['results'])
        dispatch(complitPetition());
    }
    return{
        getPokemons,
        pokemons
    }
}