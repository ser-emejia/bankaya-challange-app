import { useQuery } from "@tanstack/react-query";
import { useLocalSearchParams } from "expo-router";

import { getPokemonQueryOptions } from "@/queries/pokemon";

import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

function PokemonPage() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data, isLoading } = useQuery(getPokemonQueryOptions(id));

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ gap: 16, padding: 16 }}
    >
      <View
        style={{
          borderWidth: 1,
          borderColor: "red",
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={styles.wrapImage}>
          <Image
            style={{ width: 200, height: 200, objectFit: "contain" }}
            source={{ uri: data?.sprites.other.showdown.front_default }}
          />
        </View>
        <Text style={styles.pokemonName}>{data?.name}</Text>
      </View>
      <View>
        <Text>Abilities</Text>
        {data?.abilities.map((ability) => (
          <Text key={ability.ability.name}>{ability.ability.name}</Text>
        ))}
      </View>
      <View>
        <Text>Stats</Text>
        {data?.stats.map((stat) => (
          <View key={stat.stat.name}>
            <Text>{stat.stat.name}</Text>
            <Text>{stat.base_stat}</Text>
          </View>
        ))}
      </View>
      <View>
        <Text>Traits</Text>
        <Text>Types</Text>
        {data?.types.map((type) => (
          <Text key={type.type.name}>{type.type.name}</Text>
        ))}
        <Text>Height: {data?.height}</Text>
        <Text>Weight: {data?.weight}</Text>
        <Text>Base Experience: {data?.base_experience}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapImage: {
    width: 200,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default PokemonPage;
