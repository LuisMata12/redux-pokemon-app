import { useEffect, useState } from 'react'
import { usePetition } from '../hooks/usePetition'
import { Card } from './Card';

import './styles/pokemon.css'

export const Pokemon = () => {
    const [pagination,setPagination] = useState(1);
    const {getPokemons, pokemons} = usePetition();
    useEffect(() => {
      getPokemons(pagination)
    }, [pagination])
    console.log(pokemons)
    
    
  return (
    <>
    <h1 className='title_app'>Pokemon</h1>
    <div>
      {
        pokemons.isLoading
        ?<></>:<></>
      }
      <div className="loading">Loading....</div>
      <Card namePokemon={pokemons[1]}/>
    </div>
    <button onClick={()=>setPagination(pagination+1)}></button>
    </>

  )
}
