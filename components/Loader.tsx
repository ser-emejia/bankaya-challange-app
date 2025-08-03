import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  View,
} from "react-native";

import theme from "@/constants/theme";

type Props = ActivityIndicatorProps;

const Loader = ({ size = "large", color = theme.COLORS.neutral800 }: Props) => {
  return (
    <View style={styles.wrapLoader}>
      <ActivityIndicator size={size} color={color} />
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
