import { ActivityIndicator, StyleSheet, View } from "react-native";

import theme from "@/constants/theme";

const Loader = () => {
  return (
    <View style={styles.wrapLoader}>
      <ActivityIndicator size="large" color={theme.COLORS.neutral800} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapLoader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Loader;
