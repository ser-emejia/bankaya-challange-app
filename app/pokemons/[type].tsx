import { View } from "react-native";

import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams, useNavigation } from "expo-router";

import { getAllPokemonsByTypeQueryOptions } from "@/queries/pokemon";
import { PokemonTypeName } from "@/types/pokemon";

import Loader from "@/components/Loader";
import PokemonList from "@/components/PokemonList";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";

const PokemonsTypePage = () => {
  const { type } = useLocalSearchParams<{ type: PokemonTypeName }>();

  const { data = [], isLoading } = useQuery({
    ...getAllPokemonsByTypeQueryOptions(type),
    select: (data) => data.pokemon.map((pokemon) => pokemon.pokemon),
    refetchOnMount: false,
    staleTime: 1000 * 60 * 60, // keep data for 1 hour
  });

  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: capitalizeFirstLetter(type),
    });
  }, [navigation, type]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={{ flex: 1 }}>
      <PokemonList data={data.map((pokemon) => pokemon)} />
    </View>
  );
};

export default PokemonsTypePage;
