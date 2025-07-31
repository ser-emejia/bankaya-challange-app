import { Link, router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import PokemonsTypeSlider from "@/components/PokemonsTypeSlider";
import { POPULAR_POKEMON_TYPES } from "@/constants/popular-types";

export default function Index() {
  return (
    <>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Pressable onPress={() => router.push("/search")}>
          <View style={styles.searchInput} />
        </Pressable>
        <Link href="/types-modal">
          <Text>Types</Text>
        </Link>
      </View>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {POPULAR_POKEMON_TYPES.map((type) => (
          <PokemonsTypeSlider key={type} type={type} />
        ))}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
    gap: 24,
    paddingVertical: 16,
  },
  searchInput: {
    width: 40,
    height: 40,
    backgroundColor: "red",
  },
});
