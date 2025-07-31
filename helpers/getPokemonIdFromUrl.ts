export const getPokemonIdFromUrl = (url: string) => {
  if (!url || typeof url !== "string") return null;
  const id = url.split("/").filter(Boolean).pop();

  return id ? id : null;
};
