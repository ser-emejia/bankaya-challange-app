import theme from "@/constants/theme";
import { PokemonResult } from "@/types/pokemon";
import { FlatList, FlatListProps, StyleSheet } from "react-native";
import EmptyState from "./EmptyState";
import { IconName } from "./Icon";
import PokemonCard from "./PokemonCard";

type Props = Partial<FlatListProps<PokemonResult>> & {
  data: PokemonResult[];
  emptyStateStyle?: {
    icon: IconName;
    title: string;
    description: string;
  };
};

const PokemonList = ({
  data,
  emptyStateStyle = {
    icon: "search",
    title: "No pokemons found",
    description: "Try again later",
  },
  ...props
}: Props) => {
  if (!data || data.length === 0) {
    return <EmptyState {...emptyStateStyle} />;
  }

  return (
    <FlatList
      {...props}
      numColumns={2}
      data={data}
      keyExtractor={(item) => item.url}
      showsVerticalScrollIndicator={false}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      renderItem={({ item }) => (
        <PokemonCard pokemon={item} style={{ flex: 1 }} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    gap: theme.SPACING.s,
    padding: theme.SPACING.s,
  },
  columnWrapper: {
    justifyContent: "space-between",
  },
});

export default PokemonList;
