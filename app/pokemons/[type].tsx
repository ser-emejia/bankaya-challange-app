import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";

import { getPokemonsByTypeQueryOptions } from "@/queries/pokemon";
import { PopularPokemonType } from "@/types/pokemon";

import PokemonCard from "@/components/PokemonCard";

import { FlatList, StyleSheet, View } from "react-native";

const PokemonsTypePage = () => {
  const { type } = useLocalSearchParams<{ type: PopularPokemonType }>();

  const { data: pokemons = [] } = useQuery(getPokemonsByTypeQueryOptions(type));

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={pokemons}
        keyExtractor={(item) => item.url}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item }) => (
          <View style={{ marginHorizontal: 4 }}>
            <PokemonCard pokemon={item} type={type} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    gap: 8,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PokemonsTypePage;
