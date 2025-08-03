import React from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import { useRouter } from "expo-router";

import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-type-colors";
import { POKEMON_TYPES } from "@/constants/pokemon-types";
import theme from "@/constants/theme";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";

import Icon from "@/components/Icon";
import PokemonSymbolIcon from "@/components/PokemonSymbolIcon";
import Text from "@/components/Text";

const HomePage = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/search")}>
        <View style={styles.searchButton}>
          <Icon name="search" color="neutral400" />
          <Text color="neutral400">Find your favorite Pokemon</Text>
        </View>
      </Pressable>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.wrapSymbols}>
          {POKEMON_TYPES.map((type) => (
            <Pressable
              key={type}
              style={styles.wrapSymbolButton}
              onPress={() => router.push(`/pokemons/${type}`)}
            >
              <View
                style={[
                  styles.symbolButton,
                  { backgroundColor: POKEMON_TYPE_COLORS[type] },
                ]}
              >
                <Text variant="medium" weight="semiBold" color="neutral100">
                  {capitalizeFirstLetter(type)}
                </Text>
                <PokemonSymbolIcon
                  size={52}
                  name={type}
                  style={styles.symbolIcon}
                />
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.SPACING.s,
    backgroundColor: theme.BACKGROUND.light,
    paddingTop: theme.SPACING.s,
  },
  contentContainer: {
    flexGrow: 1,
    gap: theme.SPACING.m,
    padding: theme.SPACING.s,
  },
  wrapSymbolButton: {
    width: "48%",
    position: "relative",
    overflow: "hidden",
  },
  symbolButton: {
    borderRadius: 100,
    padding: theme.SPACING.l,
    flexDirection: "row",
    overflow: "hidden",
  },
  symbolIcon: {
    position: "absolute",
    top: 5,
    right: 10,
    opacity: 0.5,
    transform: [{ scale: 1.8 }],
  },
  wrapSymbols: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: theme.SPACING.s,
  },
  searchButton: {
    marginHorizontal: theme.SPACING.s,
    borderWidth: 1,
    borderColor: theme.COLORS.neutral400,
    backgroundColor: theme.COLORS.neutral50,
    borderRadius: 100,
    padding: theme.SPACING.s,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.SPACING.s,
  },
});

export default HomePage;
