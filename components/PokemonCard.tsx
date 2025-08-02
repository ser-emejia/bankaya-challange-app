import { ActivityIndicator, StyleSheet, View, ViewProps } from "react-native";

import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";

import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-type-colors";
import theme from "@/constants/theme";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { getSinglePokemonQueryOptions } from "@/queries/pokemon";
import { PokemonResult } from "@/types/pokemon";

import Text from "@/components/Text";

import PokemonImage from "./PokemonImage";

interface Props extends Pick<ViewProps, "style"> {
  pokemon: PokemonResult;
}

const PokemonCard = ({ style, pokemon }: Props) => {
  const { data, isLoading } = useQuery({
    ...getSinglePokemonQueryOptions(pokemon.url),
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60, // keep data for 1 hour
    select: (data) => ({
      id: data.id,
      type: data.types[0].type.name,
      image: data.sprites.front_default,
    }),
  });

  if (isLoading) {
    return (
      <View style={[styles.card, style]}>
        <View style={styles.container}>
          <ActivityIndicator color={theme.COLORS.neutral800} size="small" />
        </View>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={[styles.card, style]}>
        <View style={styles.container}>
          <Text>No Pokemon found</Text>
        </View>
      </View>
    );
  }

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <View style={[styles.card, style]}>
        <View style={styles.wrapTop}>
          <View
            style={[
              styles.chip,
              { backgroundColor: POKEMON_TYPE_COLORS[data.type] },
            ]}
          >
            <Text weight="semiBold" color="neutral50">
              #{data.id}
            </Text>
          </View>
        </View>
        <View style={styles.wrapImage}>
          <PokemonImage url={data.image} />
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
    alignItems: "flex-end",
  },
  wrapImage: {
    width: 100,
    height: 100,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  chip: {
    borderRadius: 100,
    paddingHorizontal: theme.SPACING.r,
    paddingVertical: theme.SPACING.xxxs,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PokemonCard;
