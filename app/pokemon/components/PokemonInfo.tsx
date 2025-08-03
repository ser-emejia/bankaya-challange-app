import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "@/components/Text";

interface Props {
  height: number;
  weight: number;
}

const PokemonInfo = ({ height, weight }: Props) => {
  return (
    <View style={styles.wrapInfo}>
      <View>
        <Text weight="semiBold" color="neutral500">
          Height
        </Text>
        <Text weight="semiBold" color="neutral500">
          Weight
        </Text>
      </View>
      <View>
        <Text weight="bold">{height ?? 0} m</Text>
        <Text weight="bold">{weight ?? 0} kg</Text>
      </View>
    </View>
  );
};

export default PokemonInfo;

const styles = StyleSheet.create({
  wrapInfo: {
    flexDirection: "row",
    gap: theme.SPACING.s,
  },
});
