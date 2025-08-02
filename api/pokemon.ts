import axiosInstance from "@/lib/axios";

import { Pokemon, PokemonTypeName } from "@/types/pokemon";
import {
  GetAllPokemonsByTypeResponse,
  GetAllPokemonsResponse,
} from "@/types/utillity";

const ALL_POKEMONS_COUNT = 48;

export async function getAllPokemons(): Promise<GetAllPokemonsResponse> {
  const { data } = await axiosInstance.get<GetAllPokemonsResponse>(
    `/pokemon?limit=${ALL_POKEMONS_COUNT}&offset=0`
  );

  return data;
}

export async function getSinglePokemon(url: string): Promise<Pokemon> {
  const { data } = await axiosInstance.get<Pokemon>(url);

  return data;
}

export async function getAllPokemonsByType(
  type: PokemonTypeName
): Promise<GetAllPokemonsByTypeResponse> {
  const { data } = await axiosInstance.get<GetAllPokemonsByTypeResponse>(
    `/type/${type}`
  );

  return data;
}
