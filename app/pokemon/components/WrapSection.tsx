import theme from "@/constants/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "@/components/Text";

interface Props extends React.PropsWithChildren {
  title: string;
}

const WrapSection = ({ children, title }: Props) => {
  return (
    <View style={styles.wrapSection}>
      <Text variant="h4" weight="bold">
        {title ?? "Section"}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapSection: {
    gap: theme.SPACING.xs,
  },
});

export default WrapSection;
