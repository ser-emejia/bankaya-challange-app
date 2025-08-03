import { StyleSheet, View } from "react-native";

import theme from "@/constants/theme";

import Text from "@/components/Text";
import { POKEMON_TYPE_COLORS } from "@/constants/pokemon-type-colors";
import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";
import { PokemonType } from "@/types/pokemon";

interface Props {
  types: PokemonType[];
}

const PokemontTypes = ({ types }: Props) => {
  return (
    <View style={styles.wrapTypes}>
      {types.map((t) => (
        <View
          key={t.type.name}
          style={[
            styles.chip,
            { backgroundColor: POKEMON_TYPE_COLORS[t.type.name] },
          ]}
        >
          <Text weight="semiBold" color="neutral50">
            {capitalizeFirstLetter(t.type.name)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default PokemontTypes;

const styles = StyleSheet.create({
  wrapTypes: {
    alignItems: "center",
    flexDirection: "row",
    gap: theme.SPACING.s,
    justifyContent: "center",
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: 100,
    paddingHorizontal: theme.SPACING.r,
    paddingVertical: theme.SPACING.xxxs,
  },
});
