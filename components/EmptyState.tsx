import React from "react";

import theme from "@/constants/theme";
import { StyleSheet, View } from "react-native";
import Icon, { IconName } from "./Icon";
import Text from "./Text";
interface Props {
  icon?: IconName;
  iconSize?: number;
  title: string;
  description: string;
}

const EmptyState = ({ icon, iconSize = 42, title, description }: Props) => {
  const wrapIconSize = React.useMemo(() => iconSize * 2, [iconSize]);

  return (
    <View style={styles.container}>
      {icon && (
        <View
          style={[
            styles.wrapIcon,
            { width: wrapIconSize, height: wrapIconSize },
          ]}
        >
          <Icon name={icon} size={iconSize} color="neutral50" />
        </View>
      )}

      <Text weight="semiBold" variant="h4">
        {title}
      </Text>
      <Text color="neutral400">{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: theme.SPACING.xxs,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.BACKGROUND.light,
  },
  wrapIcon: {
    borderWidth: 1,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLORS.neutral900,
    marginBottom: theme.SPACING.r,
  },
});

export default EmptyState;
