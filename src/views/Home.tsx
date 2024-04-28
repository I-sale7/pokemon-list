import { CardComponent } from '../components/CardComponent/CardComponent';
import { useGetPokemonByNameQuery } from '../services/pokemonAPI';
import { Pokemon } from './Pokemon'
import { useEffect, useState } from 'react'

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery('');
  
  return (
    <div className="Home">
      <div>
        {error ?
          <> {"There was an error while calling the API "}</> 
        : isLoading ?
          <>{"Loading..."} </>
        : data ?
          <>
          {selectedPokemon && <div>
            <Pokemon name={selectedPokemon}/>
          </div>}
          
          <select onChange={(event)=> setSelectedPokemon(event.target.value)} className='pokemon-card'>{data.results.map((pokemonnn: any, index: number) => {
            return <option key={index} value={pokemonnn.name}> {pokemonnn.name} </option>
          })} </select> </>: null}
      </div>
    </div>
  )
}
