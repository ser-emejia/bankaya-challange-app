import React from "react";

import { Image } from "expo-image";

interface Props {
  url: string;
}

const PokemonImage = ({ url }: Props) => {
  const [hasError, setHasError] = React.useState(false);
  const fallbackImage = require("@/assets/images/wtp.png");

  return (
    <Image
      transition={1000}
      recyclingKey={url}
      contentFit="contain"
      placeholder={fallbackImage}
      placeholderContentFit="contain"
      source={hasError ? fallbackImage : url}
      style={{ width: "100%", height: "100%" }}
      onError={() => {
        setHasError(true);
      }}
    />
  );
};

export default PokemonImage;
