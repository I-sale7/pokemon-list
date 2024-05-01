import React from "react";
import "./PokemonDetails.css";

const PokemonDetails = (data: any) => {
  const pokemonData = data.data;
  return (
    <div className="pokemon-details-component">
      <img
        className="pokemon-details__img"
        src={pokemonData.sprites.front_shiny}
        alt={pokemonData.species.name}
      />
      <hr />
      <ul className="pokemon-details">
        <li className="pokemon__name">
          <strong>{"Name"}</strong> <span>{pokemonData.species.name}</span>
        </li>
        <li className="pokemon__height">
          <strong>{"Height"}</strong> <span>{pokemonData.height}</span>
        </li>
        <li className="pokemon__weight">
          <strong>{"Weight"}</strong> <span>{pokemonData.weight}</span>
        </li>
        <li className="pokemon__types">
          <strong>{"Types"}</strong>
          <span>
            {pokemonData.types.map((res: { type: { name: string } }) => (
              <div>{res.type.name}</div>
            ))}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PokemonDetails;
