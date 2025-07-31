import { queryOptions } from "@tanstack/react-query";

import {
  getAllPokemons,
  getAllPokemonsTypes,
  getPokemon,
  getPokemonsByType,
} from "@/api/pokemon";

export const getAllPokemonsQueryOptions = (limit: number, offset: number) =>
  queryOptions({
    queryKey: ["pokemon", "all", { limit, offset }],
    queryFn: () => getAllPokemons(limit, offset),
  });

export const getPokemonQueryOptions = (name: string) =>
  queryOptions({
    queryKey: ["pokemon", "single", { name }],
    queryFn: () => getPokemon(name),
  });

export const getPokemonsByTypeQueryOptions = (type: string) =>
  queryOptions({
    queryKey: ["pokemon", "type", { type }],
    queryFn: () => getPokemonsByType(type),
  });

export const getAllPokemonsTypesQueryOptions = () =>
  queryOptions({
    queryKey: ["pokemon", "types"],
    queryFn: () => getAllPokemonsTypes(),
  });
