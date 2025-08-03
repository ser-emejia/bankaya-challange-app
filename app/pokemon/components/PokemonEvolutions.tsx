import { StyleSheet, View } from "react-native";

import theme from "@/constants/theme";
import { FormattedEvolution } from "@/types/evolution";

import Icon from "@/components/Icon";
import PokemonImage from "@/components/PokemonImage";
import Text from "@/components/Text";

import WrapSection from "./WrapSection";

interface Props {
  evolutions: FormattedEvolution[];
}

const PokemonEvolutions = ({ evolutions }: Props) => {
  return (
    <WrapSection title="Evolutions">
      <View style={styles.wrapEvolutions}>
        {evolutions.map((evolution, index) => {
          const isLast = index === evolutions.length - 1;

          return (
            <View key={evolution.name} style={styles.evolution}>
              <View style={styles.wrapImage}>
                <PokemonImage url={evolution.image} />
              </View>
              <Text weight="bold" color="neutral500">
                {evolution.name}
              </Text>
              {!isLast && (
                <Icon name="arrow-down" size={24} color="neutral800" />
              )}
            </View>
          );
        })}
      </View>
    </WrapSection>
  );
};

const styles = StyleSheet.create({
  wrapEvolutions: {
    gap: theme.SPACING.s,
    justifyContent: "center",
    alignItems: "center",
  },
  evolution: {
    alignItems: "center",
    gap: theme.SPACING.s,
  },
  wrapImage: {
    width: 100,
    height: 100,
  },
});

export default PokemonEvolutions;
