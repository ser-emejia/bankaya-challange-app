import axiosInstance from "@/lib/axios";
import {
  GetAllPokemonsResponse,
  PokemonResult,
  PokemonTypeResult,
} from "@/types/pokemon";

export async function getAllPokemons(
  limit: number = 10,
  offset: number = 0
): Promise<GetAllPokemonsResponse> {
  const { data } = await axiosInstance.get<GetAllPokemonsResponse>("/pokemon", {
    params: {
      limit,
      offset,
    },
  });

  return data;
}

export async function getPokemon(id: string) {
  const { data } = await axiosInstance.get(`/pokemon/${id}`);

  return data;
}

export async function getPokemonsByType(
  type: string
): Promise<PokemonResult[]> {
  const { data } = await axiosInstance.get<{
    pokemon: { pokemon: PokemonResult }[];
  }>(`/type/${type}`);

  return data ? data.pokemon.map((p) => p.pokemon) : ([] as PokemonResult[]);
}

export async function getAllPokemonsTypes(): Promise<PokemonTypeResult[]> {
  const { data } = await axiosInstance.get<{ results: PokemonTypeResult[] }>(
    "/type"
  );

  return data ? data.results : [];
}
