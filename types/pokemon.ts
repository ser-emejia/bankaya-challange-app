import { NamedApiResource } from "./utillity";

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  species: PokemonSpecie;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  weight: number;
}

export interface PokemonSprites {
  front_default: string;
}

export type PokemonResult = NamedApiResource<string>;

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: NamedApiResource<PokemonStatName>;
}

export type PokemonType = {
  slot: number;
  type: NamedApiResource<PokemonTypeName>;
};

export interface PokemonAbility {
  ability: NamedApiResource<string>;
}

export type PokemonSpecie = NamedApiResource<string>;

export type PokemonTypeName =
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
  | "fairy";

export type PokemonStatName =
  | "hp"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense"
  | "speed";
