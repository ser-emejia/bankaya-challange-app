import { capitalizeFirstLetter } from "./capitalizeFirstLetter";
import { getPokemonIdFromUrl } from "./getPokemonIdFromUrl";
import { getPokemonImageById } from "./getPokemonImageById";

import { EvolutionChain, FormattedEvolution } from "@/types/evolution";

export function formatEvolutionChain(
  chain: EvolutionChain
): FormattedEvolution[] {
  const { name: pokemonBaseName, url: pokemonBaseUrl } = chain.species;

  const pokemonBase = {
    name: capitalizeFirstLetter(pokemonBaseName),
    image: getPokemonImageById(getPokemonIdFromUrl(pokemonBaseUrl)),
  };

  const evolutions = [pokemonBase];

  function collectEvolutions(evolution: EvolutionChain) {
    evolutions.push({
      name: capitalizeFirstLetter(evolution.species.name),
      image: getPokemonImageById(getPokemonIdFromUrl(evolution.species.url)),
    });

    evolution.evolves_to.forEach((nextEvolution) => {
      collectEvolutions(nextEvolution);
    });
  }

  chain.evolves_to.forEach((evolution) => {
    collectEvolutions(evolution);
  });

  return evolutions;
}
