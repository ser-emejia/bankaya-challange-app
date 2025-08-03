import React from "react";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import theme from "@/constants/theme";
import ReactQueryProvider from "@/provider/ReactQueryProvider";

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Thin": require("../assets/fonts/Inter-Thin.ttf"),
  });

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ReactQueryProvider>
      <Stack
        screenOptions={{
          headerBackTitle: "Back",
          headerShadowVisible: false,
          headerTintColor: theme.COLORS.neutral800,
          headerStyle: { backgroundColor: theme.BACKGROUND.light },
          contentStyle: {
            backgroundColor: theme.BACKGROUND.light,
          },
          headerTitleStyle: {
            fontFamily: theme.FONT.weight.bold,
            fontSize: theme.FONT.variant.h3.font_size,
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: "Pokedex" }} />
        <Stack.Screen
          name="search"
          options={{
            title: "",
            headerBackTitle: "Cancel",
            animation: "slide_from_bottom",
          }}
        />
        <Stack.Screen
          name="pokemon/[name]"
          options={{
            headerTransparent: true,
            headerStyle: { backgroundColor: "transparent" },
          }}
        />
        <Stack.Screen name="pokemons/[type]" />
      </Stack>
      <StatusBar style="dark" />
    </ReactQueryProvider>
  );
}
