import React from "react";

import { PokemonResult } from "@/types/pokemon";

import AsyncStorage from "@react-native-async-storage/async-storage";

interface FavoritesContextType {
  isLoading: boolean;
  favorites: PokemonResult[];
  isFavorite: (url: string) => boolean;
  removeFavorite: (url: string) => void;
  addFavorite: (pokemon: PokemonResult) => void;
}

const STORAGE_KEY = "@pokemon_favorites";

export const FavoritesContext = React.createContext<
  FavoritesContextType | undefined
>(undefined);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [favorites, setFavorites] = React.useState<PokemonResult[]>([]);

  React.useEffect(() => {
    getFavorites();
  }, []);

  async function getFavorites() {
    try {
      const storedFavorites = await AsyncStorage.getItem(STORAGE_KEY);

      if (!storedFavorites) return;

      const parsedFavorites = JSON.parse(storedFavorites);

      setFavorites(parsedFavorites);
    } catch (error) {
      console.error("Error getting favorites", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function addFavorite(pokemon: PokemonResult) {
    try {
      const nextFavorites = [...favorites, pokemon];
      setFavorites(nextFavorites);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextFavorites));
    } catch (error) {
      console.error("Error adding favorite", error);
    }
  }

  async function removeFavorite(url: string) {
    try {
      const newFavorites = favorites.filter((pokemon) => pokemon.url !== url);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  }

  function isFavorite(url: string) {
    return favorites.some((pokemon) => pokemon.url === url);
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite, isLoading }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
