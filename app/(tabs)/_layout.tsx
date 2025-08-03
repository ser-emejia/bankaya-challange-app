import theme from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.COLORS.neutral800,
        tabBarInactiveTintColor: theme.COLORS.neutral300,
        tabBarStyle: {
          backgroundColor: theme.BACKGROUND.light,
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShadowVisible: false,
          headerTintColor: theme.COLORS.neutral800,
          headerStyle: { backgroundColor: theme.BACKGROUND.light },
          headerTitleStyle: {
            fontFamily: theme.FONT.weight.bold,
            fontSize: theme.FONT.variant.h3.font_size,
          },

          title: "Pokedex",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="home"
              size={26}
              color={
                focused ? theme.COLORS.neutral800 : theme.COLORS.neutral300
              }
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          headerShadowVisible: false,
          headerTintColor: theme.COLORS.neutral800,
          headerStyle: { backgroundColor: theme.BACKGROUND.light },
          headerTitleStyle: {
            fontFamily: theme.FONT.weight.bold,
            fontSize: theme.FONT.variant.h3.font_size,
          },
          title: "Favorites",
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="favorite"
              size={26}
              color={
                focused ? theme.COLORS.neutral800 : theme.COLORS.neutral300
              }
            />
          ),
        }}
      />
    </Tabs>
  );
}
