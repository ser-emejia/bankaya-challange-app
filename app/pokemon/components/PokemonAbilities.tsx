import React from "react";
import { StyleSheet, View } from "react-native";

import theme from "@/constants/theme";

import { capitalizeFirstLetter } from "@/helpers/capitalizeFirstLetter";

import { PokemonAbility } from "@/types/pokemon";

import Text from "@/components/Text";

import WrapSection from "./WrapSection";

interface Props {
  abilities: PokemonAbility[];
}

const PokemonAbilities = ({ abilities }: Props) => {
  return (
    <WrapSection title="Abilities">
      <View style={styles.wrapAbilities}>
        {abilities.map((ability: PokemonAbility) => (
          <React.Fragment key={ability.ability.name}>
            <Text weight="bold" color="neutral500">
              {capitalizeFirstLetter(ability.ability.name)}
            </Text>
          </React.Fragment>
        ))}
      </View>
    </WrapSection>
  );
};

export default PokemonAbilities;

const styles = StyleSheet.create({
  wrapAbilities: {
    flexDirection: "row",
    gap: theme.SPACING.s,
  },
  ability: {
    paddingHorizontal: theme.SPACING.s,
    paddingVertical: theme.SPACING.xxs,
    backgroundColor: theme.COLORS.neutral200,
    borderRadius: 100,
  },
});
