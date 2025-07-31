import { Image, StyleSheet, Text, View } from "react-native";

import { typeColors } from "@/constants/type-colors";
import { getPokemonIdFromUrl } from "@/helpers/getPokemonIdFromUrl";
import { PokemonResult, PokemonType } from "@/types/pokemon";

import { Link } from "expo-router";

interface Props {
  type: PokemonType;
  pokemon: PokemonResult;
}

const PokemonCard = ({ pokemon, type }: Props) => {
  const id = getPokemonIdFromUrl(pokemon.url);

  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`;

  return (
    <Link href={`/pokemon/${id}`}>
      <View style={[styles.card, { backgroundColor: typeColors[type] }]}>
        <View style={styles.wrapImage}>
          <Image source={{ uri: url }} style={styles.image} />
        </View>
        <View style={styles.wrapName}>
          <Text
            style={styles.pokemonName}
            numberOfLines={1}
            ellipsizeMode="middle"
          >
            {pokemon.name}
          </Text>
        </View>
      </View>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    width: 120,
  },
  wrapImage: {
    width: "100%",
    height: 120,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    objectFit: "cover",
  },
  wrapName: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 4,
  },
  pokemonName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
  },
});

export default PokemonCard;
