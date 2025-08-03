import { StyleSheet, View } from "react-native";

import theme from "@/constants/theme";

import { parseStats } from "@/helpers/parsePokemonStat";
import { PokemonStat } from "@/types/pokemon";

import Text from "@/components/Text";

import WrapSection from "./WrapSection";

interface Props {
  stats: PokemonStat[];
}

const PokemonStats = ({ stats }: Props) => {
  return (
    <WrapSection title="Stats">
      {parseStats(stats).map((s) => (
        <View key={s.name} style={styles.stat}>
          <View style={styles.wrapStatName}>
            <Text weight="semiBold" color="neutral500">
              {s.name}
            </Text>
          </View>
          <View style={styles.wrapProgressBar}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${(s.value / 100) * 100}%`,
                  backgroundColor: s.color,
                },
              ]}
            />
          </View>
          <Text weight="bold">{s.value}</Text>
        </View>
      ))}
    </WrapSection>
  );
};

export default PokemonStats;

const styles = StyleSheet.create({
  stat: {
    flexDirection: "row",
    alignItems: "center",
    gap: theme.SPACING.s,
  },
  statLeft: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  wrapStatName: {
    minWidth: 50,
  },
  wrapProgressBar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    overflow: "hidden",
    backgroundColor: theme.COLORS.neutral200,
  },
  progressBar: {
    height: "100%",
    borderRadius: 4,
  },
});
