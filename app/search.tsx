import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { useQuery } from "@tanstack/react-query";

import theme from "@/constants/theme";
import { getAllPokemonsQueryOptions } from "@/queries/pokemon";

import Loader from "@/components/Loader";
import PokemonList from "@/components/PokemonList";
import SearchInput from "@/components/SearchInput";
import Text from "@/components/Text";

const ITEMS_PER_PAGE = 12;

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [page, setPage] = React.useState<number>(1);

  const { data = [], isLoading } = useQuery({
    ...getAllPokemonsQueryOptions(),
    select: (data) => (data ? data.results : []),
  });

  const filteredPokemons = data.filter((pokemon) =>
    pokemon.name.includes(searchTerm.toLowerCase())
  );
  const totalPages = Math.ceil(filteredPokemons.length / ITEMS_PER_PAGE);
  const endIndex = page * ITEMS_PER_PAGE;
  const pokemons = filteredPokemons.slice(0, endIndex);

  React.useEffect(() => {
    setPage(1);
  }, [searchTerm]);

  function handleNextPage() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <View style={{ flex: 1, paddingBottom: theme.SPACING.xxl }}>
      <View style={{ padding: theme.SPACING.s }}>
        <SearchInput
          autoFocus
          value={searchTerm}
          placeholder="Search your favorite pokemons..."
          onClear={() => {
            setSearchTerm("");
            setPage(1);
          }}
          onSearch={setSearchTerm}
        />
      </View>
      <PokemonList
        data={pokemons}
        keyboardDismissMode="on-drag"
        extraData={page}
        ListFooterComponent={() =>
          page < totalPages ? <ListFooter onPress={handleNextPage} /> : null
        }
      />
    </View>
  );
};

const ListFooter = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.wrapFooter}>
      <TouchableOpacity onPress={onPress}>
        <Text weight="semiBold">Show more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapFooter: {
    padding: theme.SPACING.s,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchPage;
