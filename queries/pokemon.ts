import { queryOptions } from "@tanstack/react-query";

import {
  getAllPokemons,
  getAllPokemonsByType,
  getSinglePokemon,
} from "@/api/pokemon";
import { PokemonTypeName } from "@/types/pokemon";

export const getAllPokemonsQueryOptions = () =>
  queryOptions({
    queryKey: ["pokemon", "all"],
    queryFn: () => getAllPokemons(),
  });

export const getSinglePokemonQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["pokemon", "single", { name }],
    queryFn: () => getSinglePokemon(name),
  });

export const getAllPokemonsByTypeQueryOptions = (type: PokemonTypeName) =>
  queryOptions({
    queryKey: ["pokemon", "type", { type }],
    queryFn: () => getAllPokemonsByType(type),
  });
