import { Stack } from "expo-router";

import ReactQueryProvider from "@/provider/ReactQueryProvider";
import { SafeAreaView } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ReactQueryProvider>
        <Stack>
          <Stack.Screen name="index" />
          <Stack.Screen name="pokemon/[id]" />
          <Stack.Screen name="pokemons/[type]" />
          <Stack.Screen name="search" />
          <Stack.Screen
            name="types-modal"
            options={{ presentation: "modal" }}
          />
        </Stack>
      </ReactQueryProvider>
    </SafeAreaView>
  );
}
