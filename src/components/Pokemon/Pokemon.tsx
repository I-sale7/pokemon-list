import PokemonDetails from "../PokemonDetails/PokemonDetails";
import { useGetPokemonByNameQuery } from "../../services/pokemonAPI";

export const Pokemon = ({ name }: { name: string }) => {
  const { data, error, isLoading, isFetching } = useGetPokemonByNameQuery(name);

  if (error) {
    return <div>Oh no, there was an error</div>;
  }

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  return <div>{data && <PokemonDetails data={data} />}</div>;
};
