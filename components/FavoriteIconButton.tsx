import React from "react";
import { TouchableOpacity } from "react-native";

import * as Haptics from "expo-haptics";

import { useFavorites } from "@/hooks/useFavorites";

import Icon from "./Icon";

interface Props {
  id: string;
  name: string;
}

const FavoriteIconButton = ({ id, name }: Props) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const isFav = isFavorite(url);

  const handleFavorite = React.useCallback(() => {
    if (isFav) {
      removeFavorite(url);
    } else {
      addFavorite({ name, url });
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }, [isFav, removeFavorite, addFavorite, url, name]);

  return (
    <TouchableOpacity onPress={handleFavorite}>
      <Icon
        name={isFav ? "heart" : "heart-outline"}
        size={28}
        color={isFav ? "red500" : "neutral500"}
      />
    </TouchableOpacity>
  );
};

export default FavoriteIconButton;
