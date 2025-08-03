import React from "react";

import { FavoritesContext } from "@/provider/FavoritesProvider";

export const useFavorites = () => {
  const context = React.useContext(FavoritesContext);

  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};
