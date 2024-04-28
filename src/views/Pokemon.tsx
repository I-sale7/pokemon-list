import { useGetPokemonByNameQuery } from './../services/pokemonAPI'

export const Pokemon = ({ name }: { name: string }) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name)

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>
            {data.species.name} {isFetching ? '...' : ''}
          </h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </>
      ) : null}
    </>
  )
}
