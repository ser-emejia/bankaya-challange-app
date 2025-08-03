import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { useQuery } from "@tanstack/react-query";
import Constants from "expo-constants";
import { useLocalSearchParams, useNavigation } from "expo-router";

import theme from "@/constants/theme";

import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { getSinglePokemonQueryOptions } from "@/queries/pokemon";

import { LinearGradient } from "expo-linear-gradient";

import FavoriteIconButton from "@/components/FavoriteIconButton";
import Loader from "@/components/Loader";
import PokemonImage from "@/components/PokemonImage";
import Text from "@/components/Text";
import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-type-colors";
import { Image } from "expo-image";
import PokemonAbilities from "./components/PokemonAbilities";
import PokemonEvolutions from "./components/PokemonEvolutions";
import PokemonInfo from "./components/PokemonInfo";
import PokemonStats from "./components/PokemonStats";
import PokemontTypes from "./components/PokemontTypes";

function PokemonPage() {
  const { name } = useLocalSearchParams<{ name: string }>();

  const { data, isLoading } = useQuery({
    ...getSinglePokemonQueryOptions(name),
  });

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: capitalizeFirstLetter(name),
      headerRight: () =>
        data && <FavoriteIconButton id={`${data.pokemon.id}`} name={name} />,
    });
  }, [navigation, name, data]);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ width: 300, height: 300 }}>
          <Image
            contentFit="contain"
            source={require("@/assets/images/wtp.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <Text align="center" weight="bold" color="neutral500">
          No Pokemon found
        </Text>
      </View>
    );
  }

  return (
    <LinearGradient
      locations={[0, 0.5]}
      style={styles.container}
      colors={[POKEMON_TYPE_COLORS[data.pokemon.types[0].type.name], "#fff"]}
    >
      <View style={styles.top} />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.wrapHero}>
          <View style={styles.wrapImage}>
            <PokemonImage url={data.pokemon.sprites.front_default} />
          </View>
          <PokemontTypes types={data.pokemon.types} />
        </View>
        <Text color="neutral600" align="center">
          {data.pokemon.description}
        </Text>
        <PokemonInfo
          height={data.pokemon.height}
          weight={data.pokemon.weight}
        />
        <PokemonStats stats={data.pokemon.stats} />
        <PokemonAbilities abilities={data.pokemon.abilities} />
        <PokemonEvolutions evolutions={data.pokemon.evolutions} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: theme.SPACING.xl,
  },
  top: {
    height: Constants.statusBarHeight + 50,
  },
  wrapHero: {
    gap: theme.SPACING.m,
  },
  wrapImage: {
    position: "relative",
    height: 320,
  },
  contentContainer: {
    flexGrow: 1,
    paddingHorizontal: theme.SPACING.s,
    gap: theme.SPACING.l,
  },
});

export default PokemonPage;
