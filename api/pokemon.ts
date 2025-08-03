import axiosInstance from "@/lib/axios";

import { formatEvolutionChain } from "@/helpers/formatEvolutionChange";

import {
  GetAllPokemonsByTypeResponse,
  GetAllPokemonsResponse,
} from "@/types/utillity";

import { formatDescription } from "@/helpers/formatDescription";
import { Evolution, FormattedEvolution } from "@/types/evolution";
import { Pokemon, PokemonTypeName } from "@/types/pokemon";

const ALL_POKEMONS_COUNT = 1302;

export async function getAllPokemons(): Promise<GetAllPokemonsResponse> {
  const { data } = await axiosInstance.get<GetAllPokemonsResponse>(
    `/pokemon?limit=${ALL_POKEMONS_COUNT}&offset=0`
  );

  return data;
}

export async function getSinglePokemon(name: string): Promise<{
  pokemon: Pokemon & { description: string; evolutions: FormattedEvolution[] };
}> {
  const [{ data: pokemonData }, { data: pokemonSpecieData }] =
    await Promise.all([
      axiosInstance.get<Pokemon>(`/pokemon/${name}`),
      axiosInstance.get<{
        evolution_chain: { url: string };
        flavor_text_entries: {
          flavor_text: string;
          language: { name: string };
        }[];
      }>(`/pokemon-species/${name}`),
    ]);

  const { data: evolutionChainData } = await axiosInstance.get<Evolution>(
    pokemonSpecieData.evolution_chain.url
  );

  const description = pokemonSpecieData.flavor_text_entries.find(
    (entry) => entry.language.name === "en"
  );

  return {
    pokemon: {
      ...pokemonData,
      description: formatDescription(description?.flavor_text || ""),
      evolutions: formatEvolutionChain(evolutionChainData.chain),
    },
  };
}

export async function getAllPokemonsByType(
  type: PokemonTypeName
): Promise<GetAllPokemonsByTypeResponse> {
  const { data } = await axiosInstance.get<GetAllPokemonsByTypeResponse>(
    `/type/${type}`
  );

  return data;
}
