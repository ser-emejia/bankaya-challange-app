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
    retry: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60, // keep data for 1 hour
  });

export const getSinglePokemonQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["pokemon", "single", { name }],
    queryFn: () => getSinglePokemon(name),
    retry: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60,
  });

export const getAllPokemonsByTypeQueryOptions = (type: PokemonTypeName) =>
  queryOptions({
    queryKey: ["pokemon", "type", { type }],
    queryFn: () => getAllPokemonsByType(type),
    retry: false,
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60,
  });
