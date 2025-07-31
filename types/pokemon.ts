import { POPULAR_POKEMON_TYPES } from "@/constants/popular-types";

export interface GetAllPokemonsResponse {
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}
export type PokemonType =
  | "normal"
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow";

export type PopularPokemonType = (typeof POPULAR_POKEMON_TYPES)[number];

export interface PokemonTypeResult {
  name: PokemonType;
  url: string;
}
