import { PokemonSpecie } from "./pokemon";

export interface Evolution {
  chain: EvolutionChain;
}

export interface EvolutionChain {
  species: PokemonSpecie;
  evolves_to: EvolutionChain[];
}

export interface FormattedEvolution {
  name: string;
  image: string;
}
