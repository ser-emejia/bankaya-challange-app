import { useQuery } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React from "react";

import { getAllPokemonsTypesQueryOptions } from "@/queries/pokemon";

import { PokemonTypeResult } from "@/types/pokemon";
import { FlatList, ListRenderItem, Pressable, Text, View } from "react-native";

function TypesModalScreen() {
  const { data = [], isLoading } = useQuery(getAllPokemonsTypesQueryOptions());
  const router = useRouter();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const renderItem: ListRenderItem<PokemonTypeResult> = ({ item }) => (
    <Pressable onPress={() => router.replace(`/pokemons/${item.name}`)}>
      <Text>{item.name}</Text>
    </Pressable>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

export default TypesModalScreen;
