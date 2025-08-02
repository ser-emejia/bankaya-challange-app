import theme from "@/constants/theme";
import { StyleSheet, TextProps, Text as TextRN, TextStyle } from "react-native";

type FontWeight = "thin" | "regular" | "semiBold" | "bold";

interface Props extends TextProps {
  weight?: FontWeight;
  mT?: keyof typeof theme.SPACING;
  mR?: keyof typeof theme.SPACING;
  mB?: keyof typeof theme.SPACING;
  mL?: keyof typeof theme.SPACING;
  mV?: keyof typeof theme.SPACING;
  mH?: keyof typeof theme.SPACING;
  align?: TextStyle["textAlign"];
  color?: keyof typeof theme.COLORS;
  variant?: keyof typeof theme.FONT.variant;
}

const Text = ({
  mT,
  mR,
  mV,
  mH,
  mB,
  mL,
  style,
  children,
  align = "left",
  weight = "regular",
  variant = "medium",
  color = "neutral800",
  ...props
}: Props) => {
  return (
    <TextRN
      {...props}
      style={[
        style,
        styles[weight],
        styles[variant],
        {
          textAlign: align,
          color: theme.COLORS[color],
          marginTop: mT ? theme.SPACING[mT] : undefined,
          marginLeft: mL ? theme.SPACING[mL] : undefined,
          marginRight: mR ? theme.SPACING[mR] : undefined,
          marginBottom: mB ? theme.SPACING[mB] : undefined,
          marginVertical: mV ? theme.SPACING[mV] : undefined,
          marginHorizontal: mH ? theme.SPACING[mH] : undefined,
        },
      ]}
    >
      {children}
    </TextRN>
  );
};

const styles = StyleSheet.create({
  thin: {
    fontFamily: theme.FONT.weight.thin,
  },
  regular: {
    fontFamily: theme.FONT.weight.regular,
  },
  semiBold: {
    fontFamily: theme.FONT.weight.semiBold,
  },
  bold: {
    fontFamily: theme.FONT.weight.bold,
  },
  tiny: {
    fontSize: theme.FONT.variant.tiny.font_size,
    lineHeight: theme.FONT.variant.tiny.line_height,
  },
  small: {
    fontSize: theme.FONT.variant.small.font_size,
    lineHeight: theme.FONT.variant.small.line_height,
  },
  medium: {
    fontSize: theme.FONT.variant.medium.font_size,
    lineHeight: theme.FONT.variant.medium.line_height,
  },
  base: {
    fontSize: theme.FONT.variant.base.font_size,
    lineHeight: theme.FONT.variant.base.line_height,
  },
  h4: {
    fontSize: theme.FONT.variant.h4.font_size,
    lineHeight: theme.FONT.variant.h4.line_height,
  },
  h3: {
    fontSize: theme.FONT.variant.h3.font_size,
    lineHeight: theme.FONT.variant.h3.line_height,
  },
  h2: {
    fontSize: theme.FONT.variant.h2.font_size,
    lineHeight: theme.FONT.variant.h2.line_height,
  },
  h1: {
    fontSize: theme.FONT.variant.h1.font_size,
    lineHeight: theme.FONT.variant.h1.line_height,
  },
});

export default Text;
