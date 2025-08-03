import React from "react";

import { Image, ImageProps } from "expo-image";
import { StyleSheet } from "react-native";

interface Props extends ImageProps {
  url: string;
}

const PokemonImage = ({ url, style, ...props }: Props) => {
  const [hasError, setHasError] = React.useState(false);
  const fallbackImage = require("@/assets/images/wtp.png");

  return (
    <Image
      {...props}
      transition={1000}
      recyclingKey={url}
      contentFit="contain"
      style={[styles.image, style]}
      placeholder={fallbackImage}
      placeholderContentFit="contain"
      source={hasError ? fallbackImage : { uri: url }}
      onError={() => {
        setHasError(true);
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
});

export default PokemonImage;
