export function getPokemonIdFromUrl(url: string) {
  if (!url || typeof url !== "string") return "";

  const id = url.split("/").filter(Boolean).pop();

  if (!id) return "";

  return id;
}
