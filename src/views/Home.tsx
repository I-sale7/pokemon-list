
import { CardComponent } from '../components/CardComponent/CardComponent';
import { PokemonComponent } from '../components/PokemonComponent/PokemonComponent';
import { useGetPokemonByNameQuery } from '../services/pokemonAPI';
import { useState } from 'react'
import "./Home.css"

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState('');
  const { data, error, isLoading } = useGetPokemonByNameQuery('');
  
  return (
    <div className="home">
      <div className='pokemon-selector'>
        {error ?
          <> {"There was an error while calling the API "}</> 
        : isLoading ?
          <>{"Loading..."} </>
        : data ?
          <select onChange={(event)=> setSelectedPokemon(event.target.value)} className='pokemon-card'>
            <option value=''>{'Select a Pokemon..'}</option>
            {data.results.map((pokemonnn: any, index: number) => {
            return <option key={index} value={pokemonnn.name}> {pokemonnn.name} </option>
          })} </select>: null}

          {selectedPokemon && <>
            <CardComponent className=''>
              <PokemonComponent name={selectedPokemon}/>
            </CardComponent>
          </>}
      </div>
    </div>
  )
}
