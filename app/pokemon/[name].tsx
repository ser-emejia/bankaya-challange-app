import { useLocalSearchParams } from "expo-router";

import { StyleSheet, View } from "react-native";

import theme from "@/constants/theme";
import { LinearGradient } from "expo-linear-gradient";

import PokemonImage from "@/components/PokemonImage";
import Text from "@/components/Text";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";

function PokemonPage() {
  const { name } = useLocalSearchParams<{ name: string }>();

  return (
    <LinearGradient
      colors={["#c3d266", "#fff"]}
      locations={[0, 0.5]}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text variant="h2" weight="bold" color="neutral50">
          {capitalizeFirstLetter(name)}
        </Text>
      </View>
      <View>
        <PokemonImage
          url={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          }
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: theme.SPACING.s,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PokemonPage;
