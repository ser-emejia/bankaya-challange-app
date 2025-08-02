const palette = {
  primary: {
    500: "#fe5656",
  },
  neutral: {
    50: "#fff",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    1000: "#0a0a0a",
  },
  background: {
    light: "#f9f9f9",
  },
};

const theme = {
  BACKGROUND: {
    light: palette.background["light"],
  },
  COLORS: {
    primary500: palette.primary[500],
    neutral50: palette.neutral[50],
    neutral100: palette.neutral[100],
    neutral200: palette.neutral[200],
    neutral300: palette.neutral[300],
    neutral400: palette.neutral[400],
    neutral500: palette.neutral[500],
    neutral600: palette.neutral[600],
    neutral700: palette.neutral[700],
    neutral800: palette.neutral[800],
    neutral900: palette.neutral[900],
    neutral1000: palette.neutral[1000],
  },
  SPACING: {
    xxxs: 2,
    xxs: 4,
    xs: 8,
    s: 12,
    r: 16,
    m: 20,
    l: 24,
    xl: 32,
    xxl: 40,
  },
  FONT: {
    variant: {
      h1: {
        font_size: 40,
        line_height: 48,
      },
      h2: {
        font_size: 28,
        line_height: 33.6,
      },
      h3: {
        font_size: 20,
        line_height: 24,
      },
      h4: {
        font_size: 18,
        line_height: 21.6,
      },
      base: {
        font_size: 16,
        line_height: 19.2,
      },
      medium: {
        font_size: 14,
        line_height: 16.8,
      },
      small: {
        font_size: 12,
        line_height: 14.4,
      },
      tiny: {
        font_size: 10,
        line_height: 12,
      },
    },
    weight: {
      thin: "Inter-Thin",
      bold: "Inter-Bold",
      regular: "Inter-Regular",
      semiBold: "Inter-SemiBold",
    },
  },
};

export default theme;
