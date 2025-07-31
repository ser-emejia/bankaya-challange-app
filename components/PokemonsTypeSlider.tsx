import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";

import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { getPokemonsByTypeQueryOptions } from "@/queries/pokemon";
import { PopularPokemonType } from "@/types/pokemon";

import PokemonCard from "./PokemonCard";

interface Props {
  type: PopularPokemonType;
}

const PokemonsTypeSlider = ({ type }: Props) => {
  const { data: pokemons = [] } = useQuery(getPokemonsByTypeQueryOptions(type));

  return (
    <View style={styles.container}>
      <View style={styles.sliderTop}>
        <Text style={styles.titleText}>{capitalizeFirstLetter(type)}</Text>
        <Link href={`/pokemons/${type}`}>
          <Text style={styles.seeAllText}>View all</Text>
        </Link>
      </View>
      <FlatList
        horizontal
        data={pokemons.slice(0, 10)}
        keyExtractor={(item) => item.url}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) => (
          <PokemonCard key={index} pokemon={item} type={type} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  sliderTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  seeAllText: {
    fontSize: 14,
    color: "blue",
  },
  contentContainer: {
    gap: 16,
    paddingHorizontal: 16,
  },
});

export default PokemonsTypeSlider;
