import { PokemonType } from "@/types/pokemon";

export const POPULAR_POKEMON_TYPES = [
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  // "fighting",
  // "rock",
  // "dragon",
  // "bug",
] as const satisfies readonly PokemonType[];
