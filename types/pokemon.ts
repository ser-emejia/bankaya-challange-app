import { NamedApiResource } from "./utillity";

export interface Pokemon {
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  name: string;
  order: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  weight: number;
}

export interface PokemonSprites {
  front_default: string;
}

export type PokemonResult = NamedApiResource<string>;

export type PokemonType = {
  slot: number;
  type: NamedApiResource<PokemonTypeName>;
};

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
