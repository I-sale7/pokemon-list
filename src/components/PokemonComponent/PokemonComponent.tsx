import PokemonDetailsComponent from '../PokemonDetailsComponent/PokemonDetailsComponent'
import { useGetPokemonByNameQuery } from './../../services/pokemonAPI'

export const PokemonComponent = ({ name }: { name: string }) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name)

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <PokemonDetailsComponent data={data}/>
        </>
      ) : null}
    </>
  )
}
