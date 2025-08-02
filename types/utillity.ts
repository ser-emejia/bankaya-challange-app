import { PokemonResult } from "./pokemon";

export interface NamedApiResource<T> {
  name: T;
  url: string;
}

export interface GetAllPokemonsResponse {
  results: PokemonResult[];
}

export interface GetAllPokemonsByTypeResponse {
  pokemon: {
    pokemon: NamedApiResource<string>;
    slot: number;
  }[];
}
