import Loader from "@/components/Loader";
import PokemonList from "@/components/PokemonList";
import theme from "@/constants/theme";
import { useFavorites } from "@/hooks/useFavorites";

import { StyleSheet, View } from "react-native";

const FavoritesPage = () => {
  const { favorites, isLoading } = useFavorites();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={styles.container}>
      <PokemonList
        data={favorites}
        emptyStateStyle={{
          icon: "heart",
          title: "No favorites yet",
          description: "Add your favorite pokemons to your favorites list",
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.SPACING.s,
    backgroundColor: theme.BACKGROUND.light,
    paddingVertical: theme.SPACING.s,
  },
});
export default FavoritesPage;
