import { Card } from "../components/Card/Card";
import { Pokemon } from "../components/Pokemon/Pokemon";
import { useGetPokemonByNameQuery } from "../services/pokemonAPI";
import { useState } from "react";
import "./Home.css";
import { ListBox } from "primereact/listbox";

export const PokemonTemplate = (pokemon: any) => <h3>{pokemon.name}</h3>;

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const { data, error, isLoading } = useGetPokemonByNameQuery("");

  const listBoxPokemon =
    data &&
    data.results.map((pokemon: any) => {
      return {
        name: pokemon.name,
        label: pokemon.name,
        value: pokemon.name,
      };
    });

  if (error) {
    return (
      <div className="home">
        <div className="pokemon-selector">
          <p>{"There was an error while calling the API "}</p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="home">
        <div className="pokemon-selector">
          <p>{"Loading..."}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon-selector">
      <ListBox
        optionLabel="name"
        value={selectedPokemon}
        options={listBoxPokemon}
        itemTemplate={PokemonTemplate}
        onChange={(e) => setSelectedPokemon(e.value)}
        className="pokemon-list"
      />

      {selectedPokemon && (
        <Card className="pokemon-card">
          <Pokemon name={selectedPokemon} />
        </Card>
      )}
    </div>
  );
}
