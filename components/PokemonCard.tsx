import React from "react";

import { StyleSheet, View, ViewProps } from "react-native";

import { Link } from "expo-router";

import theme from "@/constants/theme";
import { PokemonResult } from "@/types/pokemon";

import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { getPokemonIdFromUrl } from "@/helpers/getPokemonIdFromUrl";
import { getPokemonImageById } from "@/helpers/getPokemonImageById";

import PokemonImage from "./PokemonImage";

import Text from "@/components/Text";
import FavoriteIconButton from "./FavoriteIconButton";

interface Props extends Pick<ViewProps, "style"> {
  pokemon: PokemonResult;
}

const PokemonCard = ({ style, pokemon }: Props) => {
  const id = React.useMemo(
    () => getPokemonIdFromUrl(pokemon.url),
    [pokemon.url]
  );

  const image = React.useMemo(() => getPokemonImageById(id), [id]);

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <View style={[styles.card, style]}>
        <View style={styles.wrapTop}>
          <Text align="right" weight="semiBold" color="neutral500">
            #{id}
          </Text>
          <FavoriteIconButton id={id} name={pokemon.name} />
        </View>
        <View style={styles.wrapImage}>
          <PokemonImage url={image} />
        </View>
        <Text
          weight="bold"
          align="center"
          numberOfLines={1}
          ellipsizeMode="middle"
        >
          {capitalizeFirstLetter(pokemon.name)}
        </Text>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: theme.SPACING.xs,
    width: 180,
    height: 180,
    gap: theme.SPACING.xs,
    overflow: "hidden",
    backgroundColor: theme.COLORS.neutral50,
    borderRadius: 12,
    boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.1)",
    elevation: 10,
  },
  wrapTop: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: theme.SPACING.xs,
  },
  wrapImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PokemonCard;
